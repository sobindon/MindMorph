/*
  Warnings:

  - Added the required column `courseId` to the `CourseReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `QnA` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseReview" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "QnA" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseReview" ADD CONSTRAINT "CourseReview_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QnA" ADD CONSTRAINT "QnA_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
