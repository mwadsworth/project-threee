const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route("/")
  .get(ordersController.findAll)
  .post(ordersController.create)
  .put(ordersController.update)
  .delete(ordersController.remove);

module.exports = router;
