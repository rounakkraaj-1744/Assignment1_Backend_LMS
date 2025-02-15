/*
  Warnings:

  - You are about to drop the column `addressId` on the `Library` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Library` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Library" DROP CONSTRAINT "Library_addressId_fkey";

-- DropIndex
DROP INDEX "Library_addressId_key";

-- AlterTable
ALTER TABLE "Library" DROP COLUMN "addressId",
ADD COLUMN     "address" TEXT NOT NULL;

-- DropTable
DROP TABLE "Address";
