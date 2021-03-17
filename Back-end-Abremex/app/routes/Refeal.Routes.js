const express = require("express");
const app = express.Router();
const userController = require("../controllers/RefealCode.Controller");

app.get("/", userController.getRefeals);
app.get("/:customerId", userController.getRefeal);
app.post("/", userController.addRefeal);
app.put("/", userController.editRefeal);
app.delete("/:customerId", userController.removeRefeal);

module.exports = app;
