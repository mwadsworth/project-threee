const db = require("../models");
const itemsList = require("./items.json");

// Defining methods for the itemsController
// Right now this is a stub getting data from a
// JSON file
module.exports = {
  findAll: function(req, res) {
      res.json(itemsList);
  }
};
