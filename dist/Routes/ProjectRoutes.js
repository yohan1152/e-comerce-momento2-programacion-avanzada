'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProductsController = require('../Controllers/ProductsController');

var _ProductsController2 = _interopRequireDefault(_ProductsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Rutas Api E-comerce
router.get('/', _ProductsController2.default.listproducts);
router.get('/:id', _ProductsController2.default.getproduct);
router.post('/', _ProductsController2.default.addproduct);
router.put('/', _ProductsController2.default.updateproduct);
router.delete('/:id', _ProductsController2.default.deleteproduct);

module.exports = router;