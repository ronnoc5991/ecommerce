# GENERIC E-COMMERCE APP

This is a generic e-commerce application.

It consists of three main parts:

- a MySQL database
- a NestJS server application
- a Next.js client application

## Startup

To start the application:

```
docker compose up
```

To seed the database: (within the server container)

```

npx prisma db seed
```
