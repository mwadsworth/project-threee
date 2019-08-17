var db = require("../../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/user_items_view", function(req, res) {
    db.user_items_view
      .findAll({
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

  // Get a item by userId
  app.get("/api/user_items_view/:id", function(req, res) {
    db.user_items_view
      .findAll({
        where: {
          ownerId: req.params.id
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

  // Get a item by userId and itemId
  app.get("/api/user_items_view/:id/:cid", function(req, res) {
    db.user_items_view
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
