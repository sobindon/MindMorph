-- DropForeignKey
ALTER TABLE "SocialHandle" DROP CONSTRAINT "SocialHandle_userId_fkey";

-- AlterTable
ALTER TABLE "SocialHandle" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SocialHandle" ADD CONSTRAINT "SocialHandle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
