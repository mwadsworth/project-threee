var db = require("../../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/items", function(req, res) {
    db.items.findAll({}).then(function(dbOrders) {
      res.json(dbOrders);
    });
  });

  // Get a order by id
  app.get("/api/items/:id", function(req, res) {
    db.items
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
  app.post("/api/items", function(req, res) {
    db.items
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

  // PUT route for updating items
  app.put("/api/items", function(req, res) {
    db.items
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an order by id
  app.delete("/api/items/:id", function(req, res) {
    db.items
      .destroy({ where: { id: req.params.id } })
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  });
};
