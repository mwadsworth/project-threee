// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    // res.sendFile(path.join(__dirname, "../public/createUserLogin.html"));
  });
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
  app.get("/admin/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });
  app.get("/admin/challenges", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/challenges.html"));
  });
  app.get("/admin/user/select/challenge", function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/userSelectChallenge.html")
    );
  });
  app.get("/admin/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
  app.get("/admin/main/select", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainUserSelectChallenge.html"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
};
