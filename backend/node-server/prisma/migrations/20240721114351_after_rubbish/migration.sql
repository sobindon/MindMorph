/*
  Warnings:

  - You are about to drop the `swiper` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "swiper";

-- CreateTable
CREATE TABLE "Swiper" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "isVisible" BOOLEAN NOT NULL,

    CONSTRAINT "Swiper_pkey" PRIMARY KEY ("id")
);
