/*
  Warnings:

  - Added the required column `code` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `units` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subject` ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `units` INTEGER NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;
