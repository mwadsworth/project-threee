const db = require("../models");
const userList = require("./users.json");

// Defining methods for the usersController
// Right now this is a stub getting data from a
// JSON file
module.exports = {
  findAll: function(req, res) {
      res.json(userList);
  }
};
