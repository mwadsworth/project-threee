const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.UsersItemsView
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.UsersItemsView
      .findById({"ownerId": req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
