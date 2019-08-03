const db = require("../models");
const ordersList = require("./orders.json");

// Defining methods for the ordersController
// Right now this is a stub getting data from a
// JSON file
module.exports = {
  findAll: function(req, res) {
      res.json(ordersList);
  }
};
