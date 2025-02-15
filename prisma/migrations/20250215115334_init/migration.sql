/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Library" DROP CONSTRAINT "Library_addressId_fkey";

-- DropTable
DROP TABLE "Address";
