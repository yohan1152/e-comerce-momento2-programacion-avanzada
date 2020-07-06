'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProductsController = require('../Controllers/ProductsController');

var _ProductsController2 = _interopRequireDefault(_ProductsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Rutas Web E-comerce
router.get("/", function (req, res) {
    data = _ProductsController2.default.listproducts;
    console.log(data);
    res.render("products", { data: data });
});

/*
router.get('/', controllerProducts.listproducts);

router.get('/:id', controllerProducts.getproduct);

router.post('/', controllerProducts.addproduct);

router.put('/', controllerProducts.updateproduct);

router.delete('/:id', controllerProducts.deleteproduct);

module.exports = router;

*/