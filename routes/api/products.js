const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');  //llamar los mocks de los productos

//lista todos los produstos
router.get('/', function(req, res) {
    const { query } = req.query; //consulta todos los datos

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});
//lista un producto pormedio de: productId (variable parámetro)
router.get('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        //se debe colocar el productId como parametro
        //http://localhost:8000/api/products/1 forma de llamarlo en postman
        data: productMocks[productId],
        message: 'product retrieved'
    });
});
//crea un prodcuto nuevo
router.post('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(201).json({
        data: productMocks[productId], //trae un producto específico
        message: 'products listed post'
    });
});
//Actualizar
router.put('/:productId', function(req, res) {

    res.status(200).json({
        data: productMocks,
        message: 'products updated'
    });
});
//Borrar
router.delete('/:productId', function(req, res) {
    const { productId } = req.params;
    res.status(200).json({
        data: productMocks[productId],
        message: 'products deleted'
    });
});

module.exports = router;
