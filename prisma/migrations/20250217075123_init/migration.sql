/*
  Warnings:

  - You are about to drop the column `address` on the `Library` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Library" DROP COLUMN "address";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "libraryId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_libraryId_key" ON "Address"("libraryId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
