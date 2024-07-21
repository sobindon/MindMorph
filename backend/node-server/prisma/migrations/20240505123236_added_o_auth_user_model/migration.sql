-- AlterTable
CREATE SEQUENCE oauthuser_id_seq;
ALTER TABLE "OAuthUser" ALTER COLUMN "id" SET DEFAULT nextval('oauthuser_id_seq');
ALTER SEQUENCE oauthuser_id_seq OWNED BY "OAuthUser"."id";

-- AlterTable
ALTER TABLE "SocialHandle" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "SocialHandle_id_seq";
