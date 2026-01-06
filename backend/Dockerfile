FROM node:24.12.0

WORKDIR /app

COPY ./package.json .

COPY ./package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
