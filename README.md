
# Hi5


## Prisma
Migrations were already generated in prisma/migrations. You likely only need to run this after starting
your database up with `docker-compose up`
```
npx prisma migrate reset --preview-feature
```

More prisma migrate commands:
```
  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
  $ prisma migrate dev --preview-feature

  Reset your database and apply all migrations
  $ prisma migrate reset --preview-feature

  Apply pending migrations to the database in production/staging
  $ prisma migrate deploy --preview-feature

  Check the status of migrations in the production/staging database
  $ prisma migrate status --preview-feature

  Specify a schema
  $ prisma migrate status --schema=./schema.prisma --preview-feature
```

