require("dotenv").config();

const express = require("express");

const fileUpload = require("express-fileupload");
const AWS = require("aws-sdk");

// Use sequelze on a MySQL DB
var db = require("./models");

// Setup server on 3001 so React can default to 3000
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

// Take care of the error:
// Access to fetch at 'http://localhost:3001/api/scribble' from 
// origin 'http://localhost:3000' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
// If an opaque response serves your needs, set the request's mode to 'no-cors' 
// to fetch the resource with CORS disabled.Access to fetch at 'http://localhost:3001/api/scribble' 
// from origin 'http://localhost:3000' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
// If an opaque response serves your needs, set the request's mode to 'no-cors' to 
// fetch the resource with CORS disabled.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
app.post("/api/scribble", (req, res) => {
  let imageFile = req.files.file.data;
  // console.log(req);
  console.log(req.files.file.data);
  console.log(req.body);
  s3.createBucket(() => {
    let param = {
      Bucket: process.env.S3_BUCKET,
      Key: `${req.body.photoName}.jpg`,
      Body: imageFile,
      ACL: "public-read",
      CacheControl: "no-cache"
    };
    s3.upload(param, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data.Location);
      }
    });
  });
});

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
