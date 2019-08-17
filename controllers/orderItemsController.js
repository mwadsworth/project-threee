const db = require("../models");
const ordersList = require("./orderItems.json");

module.exports = {
  findAll: function(req, res) {
    db.OrderItems.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => { console.log(dbModel); res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.OrderItems.findById( {orderId: req.params.oid, itemId: req.params.iid} )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.OrderItems.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.OrderItems.findOneAndUpdate({ orderId: req.params.oid, itemId: req.params.iid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.OrderItems.findById({ orderId: req.params.oid, itemId: req.params.iid })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
