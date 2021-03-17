const express = require('express');
const app = express.Router();
const userController = require('../controllers/Product.Controller');

app.get('/', userController.getProducts);
app.get('/:productId', userController.getProduct);
app.post('/', userController.addProduct);
app.put('/', userController.editProduct);
app.delete('/:productId', userController.removeProduct);

module.exports = app;