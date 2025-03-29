FROM node:22.14-alpine3.20

WORKDIR /
COPY . /app
WORKDIR /app
RUN yarn global add gh-pages
RUN yarn install && yarn generate