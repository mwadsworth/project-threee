var db = require("../../models");

module.exports = function(app) {
  // Get all orders
  app.get("/api/orders", function(req, res) {
    db.orders.findAll({}).then(function(dbOrders) {
      res.json(dbOrders);
    });
  });

  // Get a order by id
  app.get("/api/orders/:id", function(req, res) {
    db.orders
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbOrders) {
        res.json(dbOrders);
      });
  });

  // Create a new order
  app.post("/api/orders", function(req, res) {
    db.orders
      .create(req.body)
      .then(function(dbOrder) {
        res.json(dbOrder);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT route for updating orders
  app.put("/api/orders", function(req, res) {
    db.orders
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an order by id in req.body
  app.delete("/api/orders", function(req, res) {
    db.orders.destroy({ where: { id: req.body.id } }).then(function(dbModel) {
      res.json(dbModel);
    });
  });

  // Delete an order by id
  app.delete("/api/orders/:id", function(req, res) {
    db.orders.destroy({ where: { id: req.params.id } }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });
};
