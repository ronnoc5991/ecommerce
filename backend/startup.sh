#!/bin/sh

set -e

echo "Waiting for database..."

until printf "SELECT 1;" | npx prisma db execute --stdin >/dev/null 2>&1
do
  sleep 2
done

echo "Database is up"

# apply schema to db
npx prisma migrate deploy