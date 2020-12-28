-- CreateTable
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
);

-- CreateTable
CREATE TABLE "like" (
"id" SERIAL,
    "hi5Id" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "like" ADD FOREIGN KEY("hi5Id")REFERENCES "hi5"("id") ON DELETE CASCADE ON UPDATE CASCADE;
