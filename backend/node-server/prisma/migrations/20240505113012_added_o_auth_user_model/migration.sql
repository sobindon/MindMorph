/*
  Warnings:

  - You are about to drop the column `OAuthProvider` on the `OAuthUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OAuthUser" DROP COLUMN "OAuthProvider";
