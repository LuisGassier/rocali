const express = require('express');
const app = express.Router();
const userController = require('../controllers/Category.Controller');

app.get('/', userController.getCategories);
app.get('/:categoryId', userController.getCategory);
app.post('/', userController.addCategory);
app.put('/', userController.editCategory);
app.delete('/:categoryId', userController.removeCategory);

module.exports = app;