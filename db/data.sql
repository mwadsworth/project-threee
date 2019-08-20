-- Test data for projectdb and APP
DELETE FROM order_items;
ALTER TABLE order_items AUTO_INCREMENT = 1;

DELETE FROM orders;
ALTER TABLE orders AUTO_INCREMENT = 1;

DELETE FROM items;
ALTER TABLE items AUTO_INCREMENT = 1;

DELETE FROM users;
ALTER TABLE users AUTO_INCREMENT = 1;

-- users load
INSERT INTO users(id, fullName, password, email)
VALUES (1, "Jane Doe", "XXXXXX", "jdoe@mail.com");
INSERT INTO users(id, fullName, password, email)
VALUES (2, "Joe Dokes", "XXXXXX", "jdokes@mail.com");
INSERT INTO users(id, fullName, password, email)
VALUES (4, "Ernie Pyle", "XXXXXX", "epyle@mail.com");

-- items load
INSERT INTO items(id, ownerId, category, itemName, itemImage, price, sold)
VALUES (1, 1, "Furniture", "Sofa", "https://previews.123rf.com/images/seamartini/seamartini1403/seamartini140300410/26847602-cartoon-upholstered-orange-couch-sofa-or-settee-with-a-happy-smile-vector-illustration-isolated-on-w.jpg", "$10.00", 0);
INSERT INTO items(id, ownerId, category, itemName, itemImage, price, sold)
VALUES (2, 1, "Furniture", "Chair", "https://img.pngio.com/cartoon-chair-cartoon-clipart-red-cartoon-png-image-and-clipart-cartoon-chair-639_925.png", "$5.00", 0);
INSERT INTO items(id, ownerId, category, itemName, itemImage, price, sold)
VALUES (3, 2, "Other", "Lawn Mower", "https://image.shutterstock.com/image-vector/lawn-mower-260nw-137117294.jpg", "$20.00", 0);
INSERT INTO items(id, ownerId, category, itemName, itemImage, price, sold)
VALUES (4, 2, "Other", "Shovel", "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180218348/94930617-cartoon-shovel-illustration-design-.jpg", "$2.00", 0);

-- order load
INSERT INTO orders(id, buyerId, orderPlaced)
VALUES (1, 1, 0);
INSERT INTO orders(id, buyerId, orderPlaced)
VALUES (2, 2, 0);


-- order_items
INSERT INTO order_items(orderId, itemId)
VALUES (1, 1);
INSERT INTO order_items(orderId, itemId)
VALUES (1, 3);
INSERT INTO order_items(orderId, itemId)
VALUES (2, 2);
INSERT INTO order_items(orderId, itemId)
VALUES (2, 4);

