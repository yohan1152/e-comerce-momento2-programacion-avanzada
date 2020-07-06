'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect("mongodb://localhost:27017/ecomerce", { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
    console.log("Conection ");
    _app2.default.listen(8000, function () {
        console.log('Listening http://localhost:' + server.address().port);
    });
}).catch(function (error) {
    console.log(error);
});

/*
const express = require("express");
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');
const productsApiRouter = require('./routes/api/products');

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
*/