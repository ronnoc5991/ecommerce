# Generic E-Commerce App

A full-stack TypeScript e-commerce example built as a **monorepo** with a strongly-typed contract layer shared between client and server. The goal of this project is to demonstrate end-to-end type safety, clean architecture boundaries, and a realistic local development setup using containers.

## Architecture Overview

The repository contains four main pieces:

- **MySQL database** – relational store managed with Prisma
- **NestJS server** – REST API with Zod-validated contracts
- **Next.js client** – React frontend using the shared API layer
- **Shared package** – types and contracts used by both client and server

Each service is containerized with Docker and orchestrated with Docker Compose for a consistent development environment.

## Key Ideas

### Shared API Contracts

The `shared` package defines **API contracts** that describe:

- HTTP method and path parameters
- Zod schemas for request/response validation
- TypeScript types inferred directly from those schemas

This allows:

- End-to-end type safety between frontend and backend
- Runtime validation with Zod
- Zero duplication of request/response types
- Autocompletion and compile-time guarantees in both apps

### Monorepo Workflow

- NPM workspaces for dependency management
- Single source of truth for domain models
- Hot-reload development for client and server

### Tech Stack

- **Frontend:** TypeScript, Next.js
- **Backend:** TypeScript, NestJS, Prisma, MySQL
- **Validation:** Zod
- **Tooling:** Docker, Docker Compose, NPM workspaces

## Startup

Start all services:

```bash
docker compose up
```

Seed the database (inside the server container):

```bash
npx prisma db seed
```

The client will be available at:
`http://localhost:3001`

## Project Goals

- Demonstrate practical use of shared types across boundaries
- Explore contract-first API design
- Provide a realistic full-stack TypeScript example
- Keep the frontend intentionally simple to focus on architecture

---

This project is a work in progress and serves primarily as a learning and portfolio application.
