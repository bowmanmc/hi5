# Migration `20201221200456-initial-schema`

This migration has been generated by Michael Bowman at 12/21/2020, 3:04:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "hi5" (
"id" SERIAL,
    "recipient" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "corevalue" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gif" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "like" (
"id" SERIAL,
    "hi5Id" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
)

CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("email")
)

ALTER TABLE "like" ADD FOREIGN KEY("hi5Id")REFERENCES "hi5"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201221200456-initial-schema
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,37 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model hi5 {
+  id          Int       @id @default(autoincrement())
+  recipient   String
+  author      String
+  corevalue   String
+  impact      String
+  description String
+  gif         String
+  likes       like[]
+  created     DateTime  @default(now())
+  updated     DateTime  @updatedAt
+}
+
+model like {
+  id        Int       @id @default(autoincrement())
+  hi5       hi5       @relation(fields: [hi5Id], references: [id])
+  hi5Id     Int
+  user      String
+  created   DateTime  @default(now())
+}
+
+model user {
+  email     String      @id
+  name      String
+  pic       String
+  created   DateTime    @default(now())
+  updated   DateTime    @updatedAt
+}
```

