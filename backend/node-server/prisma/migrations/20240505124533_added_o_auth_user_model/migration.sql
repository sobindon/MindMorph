-- AlterTable
CREATE SEQUENCE socialhandle_id_seq;
ALTER TABLE "SocialHandle" ALTER COLUMN "id" SET DEFAULT nextval('socialhandle_id_seq');
ALTER SEQUENCE socialhandle_id_seq OWNED BY "SocialHandle"."id";
