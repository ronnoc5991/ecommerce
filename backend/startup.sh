#!/bin/sh

set -e

echo "Waiting for database..."

until printf "SELECT 1;" | npx prisma db execute --stdin >/dev/null 2>&1
do
  sleep 2
done

echo "Database is up"

echo "Applying migrations..."
# apply schema to db
npx prisma migrate deploy

echo "Starting application..."
npm run start:dev