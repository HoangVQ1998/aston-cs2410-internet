const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');

const apiRoot = 'http://localhost:3000/';

// Goals is to test Get & Post request

describe('hello API', function() { // Name for these set of test
  var server;

  before (function(done) {
    var express = require("express"); // Make express equal the express package
    var app = express(); //Call the express variable as a new application

    var router = require("../routes/hello.js")
    app.use("/", router);

    var port = 3000; // 3000  is commonly used for confirmation message
    server = app.listen(port,function(){done()});
  });

  after(function() {
    server.close();
  });

  it('GET request returns text "Hello, World"', function(done){ // Current function name
    request.get(apiRoot) // Get the API collection
    .end(function(err, res){
      expect(err).to.not.be.an('error'); // err should != 'error';
      expect(res.statusCode).to.equal(status.OK); // status code for the result should be OK
      expect(res.text).to.equal('Hello, World!'); // result text should be equal to 'Hello world!'
      done();
    });
  });

  it('Post request is not allowed', function(done) {
    request.post(apiRoot)
    .end(function(err, res) {
      expect(err).to.be.an('error');
      expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
      done();
    });
  });
});
