const db = require("../models");
const itemsList = require("./items.json");

// Defining methods for the itemsController
// Right now this is a stub getting data from a
// JSON file
module.exports = {
  findAll: function(req, res) {
      res.json(itemsList);
  },
  create: function(req, res) {
    res.send("create");
  },
  update: function(req, res) {
    res.send("update");
  },
  remove: function(req, res) {
    res.send("remove");
  }
};
