console.log("index.js executing");

var express = require("express"); // Make express equal the express package
var app = express(); //Call the express variable as a new application

app.get( // Say that if someone call get this function would happen
  "/", // relative path
  function(req, res) { // This is asynchronous callback (non-block I/O)
    res.send("Hello, World!") // Send Hello world message
  } );

var port = 3000; // 3000  is commonly used for confirmation message
app.listen(port,function() {
  console.log("Listening on port" + port);
});
