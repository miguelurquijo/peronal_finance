-- Creating the database
CREATE DATABASE personal_fianances_db_v2;

-- using the database
use personal_fianances_db_v2

-- create tables
CREATE TABLE `categories` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `budget` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `monthly_planed_spend` VARCHAR(255) NOT NULL,
    `categories` INTEGER NOT NULL,
    `start_date` DATE,
    `end_date` DATE
);

CREATE INDEX `idx_budget__categories` ON `budget` (`categories`);

ALTER TABLE `budget` ADD CONSTRAINT `fk_budget__categories` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`);

CREATE TABLE `balance_sheet` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `categories` INTEGER NOT NULL,
    `start_date` DATE,
    `end_date` DATE,
    `budget` INTEGER NOT NULL
);

CREATE INDEX `idx_balance_sheet__budget` ON `balance_sheet` (`budget`);

CREATE INDEX `idx_balance_sheet__categories` ON `balance_sheet` (`categories`);

ALTER TABLE `balance_sheet` ADD CONSTRAINT `fk_balance_sheet__budget` FOREIGN KEY (`budget`) REFERENCES `budget` (`id`) ON DELETE CASCADE;

ALTER TABLE `balance_sheet` ADD CONSTRAINT `fk_balance_sheet__categories` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

CREATE TABLE `transactions` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `date` DATE,
    `notes` VARCHAR(255) NOT NULL,
    `amount_spend` DOUBLE,
    `categories` INTEGER NOT NULL
);

CREATE INDEX `idx_transactions__categories` ON `transactions` (`categories`);

ALTER TABLE `transactions` ADD CONSTRAINT `fk_transactions__categories` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`) ON DELETE CASCADE

-- show tables
SHOW TABLES;

-- to describe a table
describe categories;

-- insert data
    -- into categories
    INSERT INTO categories (id, name)
VALUES 
	(1, "rent"),
	(2, "groseries"),
    (3,"entertainment"),
    (4, "pets"),
    (5, "transport"),
    (6, "housekeeping"),
    (7, "public utilities"),
    (8, "gym"),
    (9, "suscriptions"),
    (10, "others");