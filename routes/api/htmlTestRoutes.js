// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // Test HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/test", function(req, res) {
    res.sendFile(path.join(__dirname, "../models/test/index.html"));
  });
  app.get("/test/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../models/test/users.html"));
  });
  app.get("/test/challenges", function(req, res) {
    res.sendFile(path.join(__dirname, "../models/test/challenges.html"));
  });
  app.get("/test/user/select/challenge", function(req, res) {
    res.sendFile(
      path.join(__dirname, "../models/test/userSelectChallenge.html")
    );
  });
  app.get("/test/user/challenge/results", function(req, res) {
    res.sendFile(
      path.join(__dirname, "../models/test/userChallengeResults.html")
    );
  });
  app.get("/test/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../models/test/main.html"));
  });
};
