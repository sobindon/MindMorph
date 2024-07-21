/*
  Warnings:

  - You are about to drop the column `description` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `objective` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `requirement` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `syllabus` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `titleVideo` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "description",
DROP COLUMN "objective",
DROP COLUMN "requirement",
DROP COLUMN "subtitle",
DROP COLUMN "syllabus",
DROP COLUMN "thumbnail",
DROP COLUMN "title",
DROP COLUMN "titleVideo";
