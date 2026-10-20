#!/bin/sh

set -e

echo "Creando bases de datos..."

DATABASES="
auth_db
user_db
repository_db
company_db
"

for DB in $DATABASES
do
  EXISTS=$(PGPASSWORD=$POSTGRES_PASSWORD psql \
    -h db \
    -U $POSTGRES_USER \
    -d postgres \
    -tAc "SELECT 1 FROM pg_database WHERE datname='$DB'")

  if [ "$EXISTS" != "1" ]; then
    echo "Creando $DB"
    PGPASSWORD=$POSTGRES_PASSWORD psql \
      -h db \
      -U $POSTGRES_USER \
      -d postgres \
      -c "CREATE DATABASE $DB;"
  else
    echo "$DB ya existe"
  fi
done

echo "Proceso finalizado"