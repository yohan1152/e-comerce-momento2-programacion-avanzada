"use strict";

var _ProductsModel = require("../Models/ProductsModel");

var _ProductsModel2 = _interopRequireDefault(_ProductsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerProducts = {
    //Permite consultar los productos por su ID
    getproduct: async function getproduct(req, res) {
        try {
            var id = req.params.id;
            var product = await _ProductsModel2.default.find({ _id: id });

            if (product) {
                return res.status(200).json({
                    data: product,
                    message: "Successful product inquiry"
                });
            }
        } catch (e) {
            return res.status(400).json({
                data: [],
                message: e.message
            });
        }
    },
    //Permite agregar un nuevo producto
    addproduct: async function addproduct(req, res) {
        try {
            var _req$body = req.body,
                name = _req$body.name,
                price = _req$body.price,
                image = _req$body.image;

            var newProduct = new _ProductsModel2.default({ name: name, price: price, image: image });
            var result = await newProduct.save();

            if (result) {
                return res.status(200).json({
                    data: [],
                    message: "successfully added product"
                });
            }
        } catch (e) {
            return res.status(400).json({
                data: [],
                message: e.message
            });
        }
    },
    //Permite actualizar los datos de un producto
    updateproduct: async function updateproduct(req, res) {
        try {
            var _req$body2 = req.body,
                id = _req$body2.id,
                name = _req$body2.name,
                price = _req$body2.price,
                image = _req$body2.image;

            var result = await _ProductsModel2.default.findByIdAndUpdate(id, { name: name, price: price, image: image });

            if (result) {
                return res.status(200).json({
                    data: [],
                    message: "Product updated successfully"
                });
            }
        } catch (e) {
            return res.status(400).json({
                data: [],
                message: e.message
            });
        }
    },
    //Permite eliminar un producto
    deleteproduct: async function deleteproduct(req, res) {
        try {
            var id = req.params.id;
            var result = await _ProductsModel2.default.findByIdAndDelete(id);

            if (result) {
                return res.status(200).json({
                    data: [],
                    message: "product successfully removed"
                });
            }
        } catch (e) {
            return res.status(400).json({
                data: [],
                message: e.message
            });
        }
    },
    //Permite listar todos los productos
    listproducts: async function listproducts(req, res) {
        try {
            var products = await _ProductsModel2.default.find({});
            //const result = await propertiesModel.find({}).count();

            if (products) {
                return res.status(200).json({
                    data: products,
                    message: "Successful product consultation"
                });
            }
        } catch (e) {
            return res.status(400).json({
                data: [],
                message: e.message
            });
        }
    }
};

module.exports = controllerProducts;