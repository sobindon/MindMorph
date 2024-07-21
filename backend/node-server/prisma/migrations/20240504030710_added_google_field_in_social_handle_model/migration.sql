/*
  Warnings:

  - A unique constraint covering the columns `[google]` on the table `SocialHandle` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SocialHandle" ADD COLUMN     "google" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_google_key" ON "SocialHandle"("google");
