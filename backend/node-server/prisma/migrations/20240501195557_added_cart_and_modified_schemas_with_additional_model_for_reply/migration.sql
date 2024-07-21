-- AlterTable
ALTER TABLE "CourseReviewReply" ADD COLUMN     "courseId" INTEGER;

-- AddForeignKey
ALTER TABLE "CourseReviewReply" ADD CONSTRAINT "CourseReviewReply_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
