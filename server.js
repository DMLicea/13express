var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());


var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {

    console.log("Friend Finder app is listening on PORT: " + PORT);

  });