/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "accounts";

-- CreateTable
CREATE TABLE "accounts_ok" (
    "id" UUID NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "fullName" VARCHAR(70) NOT NULL,
    "image" VARCHAR(2083),
    "provider" VARCHAR(35) NOT NULL,
    "providerId" VARCHAR(70) NOT NULL,

    CONSTRAINT "accounts_ok_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_ok_email_key" ON "accounts_ok"("email");
