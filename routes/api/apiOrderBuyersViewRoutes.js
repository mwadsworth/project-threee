var db = require("../../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/order_buyers_view", function(req, res) {
    db.order_buyers_view
      .findAll({
        attributes: [
          "orderId",
          "buyerId",
          "buyerName",
          "orderDate"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  app.get("/api/order_buyers_view/all/:id", function(req, res) {
    db.order_buyers_view
      .findAll({
        where: {
          buyerId: req.params.id
        },
        attributes: [
          "orderId",
          "buyerId",
          "buyerName",
          "orderDate"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });

  app.get("/api/order_buyers_view/:id", function(req, res) {
    db.order_buyers_view
      .findOne({
        where: {
          orderId: req.params.id
        },
        attributes: [
          "orderId",
          "buyerId",
          "buyerName",
          "orderDate"
        ]
      })
      .then(function(dbItems) {
        res.json(dbItems);
      });
  });
};
