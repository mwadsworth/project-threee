const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
