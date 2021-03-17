const express = require("express");
const app = express.Router();
const userController = require("../controllers/Wallet.Controller");

app.get("/", userController.getWallets);
app.get("/:customerId", userController.getWallet);
app.post("/", userController.addWallet);
app.put("/", userController.editWallet);
app.delete("/:customerId", userController.removeWallet);

module.exports = app;
