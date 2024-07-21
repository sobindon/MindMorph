/*
  Warnings:

  - You are about to drop the `CourseAuthor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseAuthor" DROP CONSTRAINT "CourseAuthor_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseAuthor" DROP CONSTRAINT "CourseAuthor_userId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "titleVideo" TEXT;

-- DropTable
DROP TABLE "CourseAuthor";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
