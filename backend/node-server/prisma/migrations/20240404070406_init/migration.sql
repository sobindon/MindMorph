-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'INSTRUCTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "OAuthProvider" AS ENUM ('GOOGLE', 'FACEBOOK', 'MICROSOFT', 'GITHUB', 'TWITTER');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('English', 'Nepali', 'Hindi');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "avatar" TEXT,
    "birthdate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "oauthId" TEXT,
    "oauthProvider" "OAuthProvider",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialHandle" (
    "id" SERIAL NOT NULL,
    "website" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,
    "linkdin" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SocialHandle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseDomain" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CourseDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "courseDomainId" INTEGER NOT NULL,

    CONSTRAINT "CourseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "courseCategoryId" INTEGER NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "objective" VARCHAR(1000) NOT NULL,
    "requirement" VARCHAR(1000) NOT NULL,
    "syllabus" JSONB NOT NULL,
    "language" "Language" NOT NULL DEFAULT 'English',
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercent" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "enrollCount" INTEGER NOT NULL,
    "thumbnail" TEXT,
    "subtitle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseAuthor" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseReview" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idCourseReview" INTEGER,

    CONSTRAINT "CourseReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QnA" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "responseCount" INTEGER NOT NULL DEFAULT 0,
    "idQnA" INTEGER,

    CONSTRAINT "QnA_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_website_key" ON "SocialHandle"("website");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_twitter_key" ON "SocialHandle"("twitter");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_youtube_key" ON "SocialHandle"("youtube");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_linkdin_key" ON "SocialHandle"("linkdin");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_facebook_key" ON "SocialHandle"("facebook");

-- CreateIndex
CREATE UNIQUE INDEX "SocialHandle_userId_key" ON "SocialHandle"("userId");

-- AddForeignKey
ALTER TABLE "SocialHandle" ADD CONSTRAINT "SocialHandle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCategory" ADD CONSTRAINT "CourseCategory_courseDomainId_fkey" FOREIGN KEY ("courseDomainId") REFERENCES "CourseDomain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_courseCategoryId_fkey" FOREIGN KEY ("courseCategoryId") REFERENCES "CourseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAuthor" ADD CONSTRAINT "CourseAuthor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAuthor" ADD CONSTRAINT "CourseAuthor_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseReview" ADD CONSTRAINT "CourseReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QnA" ADD CONSTRAINT "QnA_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
