FROM node:24.12.0

WORKDIR /app

COPY package*.json .
COPY shared/package.json shared/package.json
COPY client/package.json client/package.json

RUN npm ci --workspace=client

COPY shared ./shared
COPY client ./client

RUN npm run build --workspace=shared

WORKDIR /app/client

EXPOSE 3000

# don't build yet because we need the server up and running first
CMD ["sh", "-c", "npm run build && npm run start"]
