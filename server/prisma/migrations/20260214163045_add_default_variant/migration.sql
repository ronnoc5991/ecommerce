-- DropForeignKey
ALTER TABLE `Variant` DROP FOREIGN KEY `Variant_productId_fkey`;

-- DropIndex
DROP INDEX `Variant_productId_fkey` ON `Variant`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `defaultVariantId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_defaultVariantId_fkey` FOREIGN KEY (`defaultVariantId`) REFERENCES `Variant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Variant` ADD CONSTRAINT `Variant_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
