const express = require('express');
const path = require("path");
const productsApiRouter = require('./Routes/ProjectRoutes');
const productsRouter = require('./Routes/RoutesProducts');

let app = express();
// middlewards
app.use("/static", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/products", productsRouter);
app.use('/api/products',productsApiRouter);

module.exports = app;
