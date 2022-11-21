FROM python:3.8-alpine

COPY requirements.txt .
RUN apk update  && apk add python3-dev \
    gcc \
    libc-dev \
    libxml2-dev \
    g++
    
RUN pip3.8 install -r requirements.txt \
    && rm requirements.txt

COPY . .
ENV PROMETHEUS_MULTIPROC_DIR /tmp