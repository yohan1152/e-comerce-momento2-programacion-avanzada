const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');

router.get('/', function(req, res) {
    const { query } = req.query;

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

router.get('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        //se debe colocar el productId como parametro
        //http://localhost:8000/api/products/1 forma de llamarlo en postman
        data: productMocks[productId],
        message: 'product retrieved'
    });
});

router.post('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(201).json({
        data: productMocks[productId],
        message: 'products listed post'
    });
});

router.put('/:productId', function(req, res) {

    res.status(200).json({
        data: productMocks,
        message: 'products updated'
    });
});

router.delete('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(200).json({
        data: productMocks[productId],
        message: 'products deleted'
    });
});


module.exports = router;
