-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "refreshToken" VARCHAR(255);
