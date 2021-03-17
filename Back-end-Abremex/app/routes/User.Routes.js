const express = require('express');
const app = express.Router();
const userController = require('../controllers/User.Controller');

app.get('/', userController.getUsers);
app.get('/:userId', userController.getUser);
app.post('/', userController.addUser);
app.put('/:userId', userController.editUser);
app.delete('/:userId', userController.removeUser);

module.exports = app;