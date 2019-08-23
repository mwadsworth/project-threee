var db = require("../../models");

module.exports = function(app) {
  app.get("/api/order/items", function(req, res) {
    db.order_items.findAll({}).then(function(dbOrderItems) {
      res.json(dbOrderItems);
    });
  });

  app.get("/api/order/items/:id", function(req, res) {
    db.order_items
      .findAll({
        where: {
          orderId: req.params.id
        }
      })
      .then(function(dbOrderItems) {
        res.json(dbOrderItems);
      });
  });

  app.post("/api/order/items", function(req, res) {
    db.order_items
      .create(req.body)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.put("/api/order/items/:id", function(req, res) {
    db.order_items
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.delete("/api/order/items", function(req, res) {
    db.order_items
      .destroy({
        where: { orderId: req.body.orderId, itemId: req.body.itemId }
      })
      .then(function(dbModel) {
        res.json(dbModel);
      });
  });

  app.delete("/api/order/items/:oid/:iid", function(req, res) {
    db.order_items
      .destroy({ where: { orderId: req.params.oid, itemId: req.params.iid } })
      .then(function(dbModel) {
        res.json(dbModel);
      });
  });
};
