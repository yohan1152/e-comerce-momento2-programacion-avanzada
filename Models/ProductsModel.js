const {Schema, model} = require('mongoose');

const ProductsSchema = new Schema({
    name: {type: String, required: [true, "Name required"]},
    price: {type: Number, required: [true, "Price required"]},
    image: {type: String, required: [true, "Image required"]},
    created: {type: String, default: new Date().toLocaleDateString()},
});

module.exports = model("products",ProductsSchema);