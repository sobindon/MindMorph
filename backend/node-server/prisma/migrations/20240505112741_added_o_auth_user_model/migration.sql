/*
  Warnings:

  - Added the required column `oAuthUserId` to the `SocialHandle` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "OAuthUser_email_key";

-- AlterTable
ALTER TABLE "SocialHandle" ADD COLUMN     "oAuthUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SocialHandle" ADD CONSTRAINT "SocialHandle_oAuthUserId_fkey" FOREIGN KEY ("oAuthUserId") REFERENCES "OAuthUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
