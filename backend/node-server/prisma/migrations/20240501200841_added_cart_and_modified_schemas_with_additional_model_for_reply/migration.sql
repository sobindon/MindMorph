/*
  Warnings:

  - You are about to drop the column `courseId` on the `CourseReviewReply` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseReviewReply" DROP CONSTRAINT "CourseReviewReply_courseId_fkey";

-- AlterTable
ALTER TABLE "CourseReviewReply" DROP COLUMN "courseId";
