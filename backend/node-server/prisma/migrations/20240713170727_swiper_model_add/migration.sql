-- CreateTable
CREATE TABLE "swiper" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "isVisible" BOOLEAN NOT NULL,

    CONSTRAINT "swiper_pkey" PRIMARY KEY ("id")
);
