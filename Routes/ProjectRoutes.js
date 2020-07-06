const express = require('express');
const controllerProducts = require('../Controllers/ProductsController');

const router = express.Router();

//Rutas Api E-comerce
router.get('/', controllerProducts.listproducts);
router.get('/:id', controllerProducts.getproduct);
router.post('/', controllerProducts.addproduct);
router.put('/', controllerProducts.updateproduct);
router.delete('/:id', controllerProducts.deleteproduct);

module.exports = router;