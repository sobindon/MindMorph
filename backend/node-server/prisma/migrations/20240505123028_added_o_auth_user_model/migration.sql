-- AlterTable
ALTER TABLE "OAuthUser" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "OAuthUser_id_seq";
