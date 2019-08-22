CREATE OR REPLACE VIEW user_items_view AS
SELECT
    b.id AS ownerId,
    b.fullName AS ownerName,
    b.email AS contact,
    a.id AS itemId,
    a.category AS category,
    a.itemName AS itemName,
    a.itemImage AS itemImage,
    a.price AS price,
    a.sold AS sold
FROM
    (items a, users b
)
    WHERE
(a.ownerId = b.id)
    ORDER BY
(b.fullName);

CREATE OR REPLACE VIEW order_buyers_view AS
SELECT
    a.id AS orderId,
    a.buyerId AS buyerId,
    b.fullName AS buyerName,
    a.orderDate AS orderDate,
    a.orderPlaced AS orderPlaced
FROM
    (orders a, users b)
    WHERE
(a.buyerId = b.id)
    ORDER BY
(a.orderDate);

CREATE OR REPLACE VIEW order_items_users_view AS
SELECT
    b.id AS orderId,
    b.buyerId AS buyerId,
    d.fullName AS buyerName,
    b.orderDate AS orderDate,
    b.orderPlaced AS orderPlaced,
    a.id AS itemId,
    a.ownerId AS ownerId,
    e.fullName AS ownerName,
    a.category AS category,
    a.itemName AS itemName,
    a.itemImage AS itemImage,
    a.price AS price,
    a.sold AS sold
FROM
    (items a, orders b, order_items c, users d, users e
)
    WHERE
(b.buyerId = d.id) AND
(c.itemId = a.id) AND
(a.ownerId = e.id) AND
(c.orderId = b.id) AND
(c.itemId = a.id)
    ORDER BY
(b.orderDate);
