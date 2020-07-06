"use strict";

var _mongoose = require("mongoose");

var ProductsSchema = new _mongoose.Schema({
    name: { type: String, required: [true, "Name required"] },
    price: { type: Number, required: [true, "Price required"] },
    image: { type: String, required: [true, "Image required"] },
    created: { type: String, default: new Date().toLocaleDateString() }
});

module.exports = (0, _mongoose.model)("products", ProductsSchema);