var db = require("../../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/order_items_users_view", function(req, res) {
    db.order_items_users_view
      .findAll({
        attributes: [
          "orderId",
          "buyerId",
          "buyerName",
          "orderDate",
          "itemId",
          "ownerId",
          "ownerName",
          "category",
          "itemName",
          "itemImage",
          "price"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  // Get a item by userId
  app.get("/api/order_items_users_view/:id", function(req, res) {
    db.order_items_users_view
      .findAll({
        where: {
          orderId: req.params.id
        },
        attributes: [
          "orderId",
          "buyerId",
          "buyerName",
          "orderDate",
          "itemId",
          "ownerId",
          "ownerName",
          "category",
          "itemName",
          "itemImage",
          "price"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  // Get a item by userId and itemId
  app.get("/api/order_items_users_view/:id/:cid", function(req, res) {
    db.order_items_users_view
      .findOne({
        where: {
          userId: req.params.id,
          itemId: req.params.cid
        },
        attributes: [
          "ownerId",
          "ownerName",
          "contact",
          "itemId",
          "category",
          "itemName",
          "itemImage",
          "price"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });
};
