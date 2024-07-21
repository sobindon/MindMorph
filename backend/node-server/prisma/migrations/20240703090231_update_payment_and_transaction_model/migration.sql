/*
  Warnings:

  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_code` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `signature` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `signed_field_names` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_code` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_uuid` on the `Transaction` table. All the data in the column will be lost.
  - The `id` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[oid]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `txnId` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `amt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oid` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refid` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_txnId_fkey";

-- DropIndex
DROP INDEX "Transaction_transaction_code_key";

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "txnId",
ADD COLUMN     "txnId" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_pkey",
DROP COLUMN "product_code",
DROP COLUMN "signature",
DROP COLUMN "signed_field_names",
DROP COLUMN "status",
DROP COLUMN "total_amount",
DROP COLUMN "transaction_code",
DROP COLUMN "transaction_uuid",
ADD COLUMN     "amt" INTEGER NOT NULL,
ADD COLUMN     "oid" TEXT NOT NULL,
ADD COLUMN     "refid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_txnId_key" ON "Payment"("txnId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_oid_key" ON "Transaction"("oid");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_txnId_fkey" FOREIGN KEY ("txnId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
