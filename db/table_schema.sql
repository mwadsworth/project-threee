-- -----------------------------------------------------
-- Schema projectdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS projectdb;
USE projectdb;

-- Drop tables
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;

-- -----------------------------------------------------
-- Table users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC)
);

-- -----------------------------------------------------
-- Table items
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS items (
    id INT NOT NULL AUTO_INCREMENT,
    ownerId INT NOT NULL,
    category VARCHAR(255) NOT NULL,
    itemName VARCHAR(255) NOT NULL,
    itemImage VARCHAR(255) NOT NULL,
	price VARCHAR(255) NOT NULL,
	sold BOOLEAN DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC),
    CONSTRAINT fk_owner_id FOREIGN KEY (ownerId)
        REFERENCES users (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table orders
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
    id INT NOT NULL AUTO_INCREMENT,
    buyerId INT NOT NULL,
    orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
   	orderPlaced BOOLEAN NOT NULL DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX id_idx (id ASC),
    CONSTRAINT fk_buyer_id FOREIGN KEY (buyerId)
        REFERENCES users (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table order_items
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS order_items (
    orderId INT NOT NULL,
    itemId INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (orderId, itemId),
    INDEX order_id_ixd (orderId ASC),
    INDEX item_id_ixd (itemId ASC),
    CONSTRAINT fk_order_id FOREIGN KEY (orderId)
        REFERENCES orders (id)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT fk_item_id FOREIGN KEY (itemId)
        REFERENCES items (id)
        ON DELETE CASCADE ON UPDATE NO ACTION
);
