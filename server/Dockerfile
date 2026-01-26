FROM node:24.12.0

WORKDIR /app

COPY package*.json .
COPY shared/package.json shared/package.json
COPY server/package.json server/package.json

RUN npm ci --workspace=server

COPY shared ./shared
COPY server ./server

RUN npm run build --workspace=shared

WORKDIR /app/server

# generate prisma client
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# TODO: should this call the startup script itself? in prod?
# we always need to run npx prisma migrate deploy...
CMD [ "npm", "run", "start" ]
