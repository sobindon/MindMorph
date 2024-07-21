/*
  Warnings:

  - You are about to drop the column `idCourseReview` on the `CourseReview` table. All the data in the column will be lost.
  - You are about to drop the column `idQnA` on the `QnA` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `QnA` table. All the data in the column will be lost.
  - Made the column `rating` on table `CourseReview` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CourseReview" DROP COLUMN "idCourseReview",
ALTER COLUMN "rating" SET NOT NULL;

-- AlterTable
ALTER TABLE "QnA" DROP COLUMN "idQnA",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "CourseReviewReply" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idCourseReview" INTEGER NOT NULL,

    CONSTRAINT "CourseReviewReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QnAReply" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idQnA" INTEGER NOT NULL,

    CONSTRAINT "QnAReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "craetedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isCheckout" BOOLEAN NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseReviewReply" ADD CONSTRAINT "CourseReviewReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QnAReply" ADD CONSTRAINT "QnAReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
