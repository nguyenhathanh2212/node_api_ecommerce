CREATE DATABASE IF NOT EXISTS `ecommerce`;

CREATE TABLE IF NOT EXISTS `ecommerce`.`users` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `uid` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE IF NOT EXISTS `ecommerce`.`items` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE IF NOT EXISTS `ecommerce`.`shops` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `address` varchar(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE IF NOT EXISTS `ecommerce`.`services` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `icon_url` varchar(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE IF NOT EXISTS `ecommerce`.`service_shop` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `shop_id` int,
    `service_id` int,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE IF NOT EXISTS `ecommerce`.`item_shop` (
    `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `shop_id` int,
    `item_id` int,
    `quantity` int,
    `price` float,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `updated_at` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY (`shop_id`) REFERENCES `ecommerce`.`shops`(`id`),
    FOREIGN KEY (`item_id`) REFERENCES `ecommerce`.`items`(`id`)
);
