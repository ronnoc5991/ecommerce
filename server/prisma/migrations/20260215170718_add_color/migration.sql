/*
  Warnings:

  - You are about to drop the column `color` on the `ProductVariant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,size,colorId]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `colorId` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProductVariant` DROP COLUMN `color`,
    ADD COLUMN `colorId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Color` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `hex` CHAR(7) NOT NULL,

    UNIQUE INDEX `Color_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ProductVariant_productId_size_colorId_key` ON `ProductVariant`(`productId`, `size`, `colorId`);

-- AddForeignKey
ALTER TABLE `ProductVariant` ADD CONSTRAINT `ProductVariant_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `Color`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
