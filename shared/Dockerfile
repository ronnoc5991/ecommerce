# DEV ONLY IMAGE
FROM node:24.12.0

WORKDIR /app

COPY package*.json .
COPY shared/package.json shared/package.json

RUN npm ci

COPY shared ./shared
