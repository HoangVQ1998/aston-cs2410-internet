console.log("index.js executing");

var express = require("express"); // Make express equal the express package
var app = express(); //Call the express variable as a new application

var router = require("./routes/hello.js")
app.use("/", router);




var port = 3000; // 3000  is commonly used for confirmation message
app.listen(port,function() {
  console.log("Listening on port" + port);
});
