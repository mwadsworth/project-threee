const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./items");
const orderRoutes = require("./orders");
const bookRoutes = require("./books");

// Routes
router.use("/users", userRoutes);
router.use("/items", itemRoutes);
router.use("/orders", orderRoutes);
router.use("/books", bookRoutes);

module.exports = router;
