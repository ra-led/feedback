from flask import Flask, render_template
from flask_cors import CORS
import pandas as pd
import json
import os
print(os.listdir())


def dec(x):
    return json.loads(x.replace('"', '').replace("'", '"'))


app = Flask(__name__, static_folder='assets')
CORS(app)


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


from api.routes import screener
app.register_blueprint(screener.mod)

app.db = pd.read_csv('api/trees_results_topics.tsv', sep='\t')
app.db['aspects'] = app.db['aspects'].dropna().apply(dec)
app.db['topics'] = app.db['topics'].dropna().apply(dec)
app.db['sentiment'] = app.db['sentiment'].dropna().apply(dec)
app.db['rating'] = app.db['rating'].apply(lambda x: x[-1])

# =============================================================================
# phrases
# =============================================================================
from bpemb import BPEmb
from pathlib import Path
from pymorphy2 import MorphAnalyzer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import re

app.b = BPEmb(lang="ru", vs=100000, dim=200, cache_dir=Path('api/bemp'))
app.morph = MorphAnalyzer()


def clean(text):
    text = text.lower().replace('ё', 'е')
    #text = emoji_pattern.sub(r' ', text)
    text = re.sub('[^a-zа-я0-9]', '', text)
    text = [app.morph.parse(word)[0].normal_form for word in text.split()]
    return ' '.join(text)


def phrases(aspects, sentiments):
    aspects_data = {}
    aspects_vecs = []
    for aa, ss in zip(aspects.tolist(), sentiments.tolist()):
        for a, s in zip(aa, ss):
            if a[1::2].replace(' ', '') != '':
                ctext = clean(a)
                try:
                    aspects_data[a]['cnt'] += 1
                    aspects_data[a][s] += 1
                except KeyError:
                    aspects_vecs.append(
                        app.b.embed(ctext).mean(0) if ctext else np.array([0.] * 200)
                    )
                    aspects_data[a] = {
                        'cnt': 1,
                        'Positive': 0,
                        'Negative': 0,
                        'Neutral': 0
                    }
                    aspects_data[a][s] += 1
                    
    aspects_vecs = np.array(aspects_vecs)
    aspects_keys = list(aspects_data.keys())
    sims = cosine_similarity(aspects_vecs)
    cluster = 0
    for i1 in range(len(aspects_keys)):
        for i2 in np.argsort(aspects_vecs[i1])[::-1]:
            a1 = aspects_keys[i1]
            a2 = aspects_keys[i2]
            if (sims[i1, i2] > 0.7) & (i1 != i2):
                if ('cluster' not in aspects_data[a1]) & ('cluster' not in aspects_data[a2]):
                    cluster += 1
                    aspects_data[a1]['cluster'] = cluster
                    aspects_data[a2]['cluster'] = cluster
                elif ('cluster' not in aspects_data[a1]) | ('cluster' not in aspects_data[a2]):
                    try:
                        aspects_data[a1]['cluster'] = aspects_data[a2]['cluster']
                    except KeyError:
                        aspects_data[a2]['cluster'] = aspects_data[a1]['cluster']

    results = (
        pd
        .DataFrame(aspects_data)
        .T
        .reset_index()
        .groupby('cluster')
        .apply(lambda x: {
            'cluster': x['index'][x['cnt'].idxmax()],
            'cnt': x['cnt'].sum(),
            'words': x['index'].tolist(),
            'Positive': x['Positive'].sum(),
            'Negative': x['Negative'].sum(),
            'Neutral': x['Neutral'].sum(),
            'sentiment_score': int(x['Positive'].sum() / x['cnt'].sum() * 100 // 20)
        })
    ).tolist()
    return results


aspect_phrases = phrases(app.db['aspects'], app.db['sentiment'])
app.db['cluster'] = app.db['aspects'].apply(
    lambda x: sum([
            list(filter(
            lambda cluster: a in cluster['words'],
            aspect_phrases
        ))
        for a in x
    ], [])
).apply(lambda x: {c['cluster'][0].upper() + c['cluster'][1:]: c['sentiment_score'] for c in x})


def highlight(row):
    color = {
        'Positive': 'seagreen',
        'Negative': 'red',
        'Neutral': 'purple'
        }
    text = row['text']
    for a, s in zip(row['aspects'], row['sentiment']):
        if a[1::2].replace(' ', '') != '':
            text = text.replace(a, f'<b style="color: {color[s]};">{a}</b>')
    return text
    

app.db['text'] = app.db.apply(lambda x: highlight(x), axis=1)
