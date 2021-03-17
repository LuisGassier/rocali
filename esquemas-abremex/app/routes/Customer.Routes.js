const express = require('express');
const app = express.Router();
const userController = require('../controllers/Customer.Controller');

app.get('/', userController.getCustomers);
app.get('/:customerId', userController.getCustomer);
app.post('/', userController.addCustomer);
app.put('/', userController.editCustomer);
app.delete('/:customerId', userController.removeCustomer);

module.exports = app;