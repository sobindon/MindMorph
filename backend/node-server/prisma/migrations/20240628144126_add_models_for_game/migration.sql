-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "courseCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamificationData" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT,
    "gamificationId" INTEGER NOT NULL,

    CONSTRAINT "GamificationData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameView" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "viewTime" TEXT NOT NULL,

    CONSTRAINT "GameView_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_courseCategoryId_fkey" FOREIGN KEY ("courseCategoryId") REFERENCES "CourseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamificationData" ADD CONSTRAINT "GamificationData_gamificationId_fkey" FOREIGN KEY ("gamificationId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameView" ADD CONSTRAINT "GameView_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameView" ADD CONSTRAINT "GameView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
