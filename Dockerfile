FROM ubuntu
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt install -y --allow-downgrades --allow-change-held-packages --no-install-recommends \
    build-essential \
    ca-certificates \
    cmake \
    curl \
    emacs \
    vim \
    wget
    
RUN apt install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt update
RUN apt -y install python3.8
RUN apt install -y python3-pip
RUN apt install -y git-all

COPY requirements.txt .

RUN pip install --upgrade pip \
    && pip --no-cache-dir install -r requirements.txt \
    && rm requirements.txt

COPY . .
ENV PROMETHEUS_MULTIPROC_DIR /tmp