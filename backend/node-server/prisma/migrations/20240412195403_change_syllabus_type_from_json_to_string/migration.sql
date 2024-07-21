/*
  Warnings:

  - You are about to alter the column `syllabus` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `JsonB` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "syllabus" SET NOT NULL,
ALTER COLUMN "syllabus" SET DATA TYPE VARCHAR(1000);
