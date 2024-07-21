-- CreateTable
CREATE TABLE "OAuthUser" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "oauthId" TEXT NOT NULL,
    "OAuthProvider" "OAuthProvider"[],

    CONSTRAINT "OAuthUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OAuthUser_email_key" ON "OAuthUser"("email");
