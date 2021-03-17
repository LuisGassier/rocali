const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletShema = new Schema({
  Wallet: {
    Type: String,
    required: true
  },
  User: {
    type: String,
    required: true
  },
  Ammount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Wallet", walletShema);