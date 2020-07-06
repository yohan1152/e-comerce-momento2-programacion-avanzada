const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/ecomerce", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conection ");
    app.listen(8000, () => {
        console.log(`Listening http://localhost:8000`);
    });

}).catch((error) =>{
    console.log(error);
})
