require("dotenv").config();

const express = require("express");

// Use sequelze on a MySQL DB
var db = require("./models");

// Setup server on 3001 so React can default to 3000
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API 
// Get routes for CRUD
require("./routes/api/apiUsersRoutes")(app);
require("./routes/api/apiItemsRoutes")(app);
require("./routes/api/apiOrdersRoutes")(app);
require("./routes/api/apiOrderItemsRoutes")(app);
require("./routes/api/apiUserItemsViewRoutes")(app);
require("./routes/api/apiOrderItemsUsersViewRoutes")(app);
require("./routes/api/apiOrderBuyersViewRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
