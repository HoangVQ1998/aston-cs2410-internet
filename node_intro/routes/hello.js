
var express = require("express"); // Make express equal the express package
var router = express.Router(); // Router
var status = require("http-status");
router.get( // Say that if someone call get this function would happen
  "/", // relative path
  function(req, res) { // This is asynchronous callback (non-block I/O)
    res.send("Hello, World!") // Send Hello world message
  });

router.post( "/", function(req, res) {
    res.sendStatus(status.METHOD_NOT_ALLOWED);
  });

module.exports = router;
