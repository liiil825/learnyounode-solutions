FROM dockerfile/nodejs

RUN \
  apt-get update && \
  npm install learnyounode -g


