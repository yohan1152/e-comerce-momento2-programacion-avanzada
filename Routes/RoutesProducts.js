const express = require('express');
const axios = require('axios');
//const controllerProducts = require('../Controllers/ProductsController');

const router = express.Router();

//Rutas Web E-comerce
router.get("/", function(req, res) {
    axios.get('http://localhost:8000/api/products')
        .then(function (response) {
            products = response.data;
            res.render("products", {products});
        })
        .catch(function (error) {
        //console.log(error);
        })
        .then(function () {
        });
});

router.get("/admin", function(req, res) {
    axios.get('http://localhost:8000/api/products')
        .then(function (response) {
            products = response.data;
            res.render("products-admin", {products});
        })
        .catch(function (error) {
        //console.log(error);
        })
        .then(function () {
        });
});

router.get("/detail-product/:id", function(req, res) {
    const id = req.params.id;
    
    axios.get('http://localhost:8000/api/products/'+id)
        .then(function (response) {
            product = response.data.data[0];
            res.render("detail-product", { product });
        })
        .catch(function (error) {
        //console.log(error);
        })
        .then(function () {
        });
});

router.post("/add-product", function(req, res) {
    const {name, price, image} = req.body;

    axios.post('http://localhost:8000/api/products', {
        name: name,
        price: price,
        image: image
      })
      .then((response) => {
          res.redirect('admin');
      }, (error) => {
          console.log(error);
      });
});

router.post("/modify-product", function(req, res) {
    const {id, name, price, image} = req.body;

    axios.put('http://localhost:8000/api/products', {
        id: id,
        name: name,
        price: price,
        image: image
      })
      .then((response) => {
          res.redirect('admin');
      }, (error) => {
          console.log(error);
      });
});

router.get("/delete-product/:id", function(req, res) {
    const id = req.params.id;

    axios.delete('http://localhost:8000/api/products/'+id)
    .then(function (response) {
        console.log(response.data.message);
        res.redirect('/products/admin');
    })
    .catch(function (error) {
    //console.log(error);
    })
    .then(function () {
    });
});


router.get("/create-product", function(req, res) {
    res.render("create-product");
});

router.get("/update-product/:id", function(req, res) {
    const id = req.params.id;
    
    axios.get('http://localhost:8000/api/products/'+id)
        .then(function (response) {
            product = response.data.data[0];
            res.render("update-product", { product });
        })
        .catch(function (error) {
        //console.log(error);
        })
        .then(function () {
        });
});

router.get("/detail-product/:id", function(req, res) {
    res.render("detail-product");
});

router.get("/delete-product/:id", function(req, res) {
    res.render("delete-product");
});

module.exports = router;

/*
router.get('/', controllerProducts.listproducts);

router.get('/:id', controllerProducts.getproduct);

router.post('/', controllerProducts.addproduct);

router.put('/', controllerProducts.updateproduct);

router.delete('/:id', controllerProducts.deleteproduct);

module.exports = router;

*/