const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  ownerName: { type: String, required: true },
  contact: { type: String, required: true },
  category: { type: String, required: true },
  itemName: { type: String, required: true },
  itemImage: { type: String, required: true },
  price: { type: String, required: true }
});

const ordersSchema = new Schema({
  buyerName: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  items: [itemsSchema]
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
