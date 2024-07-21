/*
  Warnings:

  - You are about to drop the column `gamificationId` on the `GamificationData` table. All the data in the column will be lost.
  - Added the required column `gameId` to the `GamificationData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GamificationData" DROP CONSTRAINT "GamificationData_gamificationId_fkey";

-- AlterTable
ALTER TABLE "GamificationData" DROP COLUMN "gamificationId",
ADD COLUMN     "gameId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GamificationData" ADD CONSTRAINT "GamificationData_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
