/*
  Warnings:

  - You are about to drop the `accounts_ok` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "accounts_ok";

-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "fullName" VARCHAR(70) NOT NULL,
    "image" VARCHAR(2083),
    "provider" VARCHAR(35) NOT NULL,
    "providerId" VARCHAR(70) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");
