import pandas as pd
from flask import Blueprint, current_app, request

mod = Blueprint('screener', __name__, url_prefix='/screener')

topic2ru = {
    'design': 'Дизайн',
    'pricing': 'Стоимость',
    'feature_request': 'Предложения',
    'complicated': 'Сложности',
    'payment_issues': 'Проблемы с оплатой',
    'refund_request': 'Возврат'
}
topic2en = {v:k for k, v in topic2ru.items()}

#{'aspects': ['Елка', 'Ветка', 'Коробка'], 'topics': ['Предложения', 'Цена', 'Возвраты', 'Доставка', 'Оплата'], 'sentiment': ['Positive', 'Negative', 'Neutral'], 'rating': ['1', '2', '3', '4', '5']}
#{"aspects":["Коробка"],"topics":[],"sentiment":[],"rating":["1","2","3","4","5"]}
#{'aspects': ['Коробка'], 'topics': [], 'sentiment': [], 'rating': ['1', '2', '3', '4', '5']}
def selection(df, query):
    mask = df['rating'].astype(int).astype(str).isin(query['rating'])
    if query['aspects']:
        aspects = set(query['aspects'])
        n_apects = len(aspects)
        mask *= df['cluster'].apply(lambda x: len(set(x).intersection(aspects)) == n_apects)
    if query['topics']:
        topics = set([topic2en[x] for x in query['topics']])
        n_topics = len(topics)
        mask *= df['topics'].apply(lambda x: len(set(x).intersection(topics)) == n_topics)
    if query['sentiment']:
        sentiment = set(query['sentiment'])
        n_sentiment = len(sentiment)
        mask *= df['sentiment'].apply(lambda x: len(set(x).intersection(sentiment)) == n_sentiment)
        #mask *= df['sentiment'].apply(lambda x: len(set(x).difference(sentiment)) == 0)
    return df[mask]


def stat(df):
    neg = int(df['sentiment'].apply(lambda x: 'Negative' in x).sum())
    ntr = int(df['sentiment'].apply(lambda x: 'Neutral' in x).sum())
    pos = int(df['sentiment'].apply(lambda x: 'Positive' in x).sum())
    aspects = (
        pd
        .DataFrame({
            'aspect': sum(df['cluster'].apply(lambda x: list(x.keys())).tolist(), []),
            'sentiment': sum(df['cluster'].apply(lambda x: list(x.values())).tolist(), []),
            'cnt': 1
        })
        .groupby('aspect')
        .agg({
            'cnt': 'sum',
            'sentiment': 'first',
        })
        .reset_index()
        .sort_values(by='cnt', ascending=False)
        .to_dict('records')
    )
    topics = (
        pd
        .DataFrame({
            'topic': sum(df['topics'].tolist(), []),
            'cnt': 1
        })
        .groupby('topic')
        .agg({
            'cnt': 'sum'
        })
        .reset_index()
        .sort_values(by='cnt', ascending=False)
    )
    topics['topic'] = topics['topic'].replace(topic2ru)
    topics = topics.to_dict('records')
    return {
        'Negative': str(neg),
        'Neutral': str(ntr),
        'Positive': str(pos),
        'aspects': aspects,
        'topics': topics
    }


@mod.route('/reviews', methods=['POST'])
def reviews():
    df = selection(current_app.db, request.json)
    return {
        'result': {
            'text': df['text'].tolist()[:50],
            'rating': df['rating'].tolist()[:50],
            'stat': stat(df),
            'total': str(df.shape[0])
        }
    }
