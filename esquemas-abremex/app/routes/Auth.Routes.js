const express = require('express');
const app = express.Router();
const auth = require('../controllers/Auth.Controller');

app.post('/', auth.login);

module.exports = app;