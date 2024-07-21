-- DropForeignKey
ALTER TABLE "GameView" DROP CONSTRAINT "GameView_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameView" DROP CONSTRAINT "GameView_userId_fkey";

-- DropForeignKey
ALTER TABLE "GamificationData" DROP CONSTRAINT "GamificationData_gameId_fkey";

-- AddForeignKey
ALTER TABLE "GamificationData" ADD CONSTRAINT "GamificationData_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameView" ADD CONSTRAINT "GameView_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameView" ADD CONSTRAINT "GameView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
