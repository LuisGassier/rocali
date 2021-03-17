const Wallet = require("../models/Wallet.Model");

const getWallets = async (req, res) => {
  try {
    const wallet = await Wallet.find();
    return res.json(wallet);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const getWallet = async (req, res) => {
  const { walletId } = req.params;
  try {
    const wallet = await Wallet.findById(walletId);
    return res.json(wallet);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const addWallet = async (req, res) => {
  try {
    const wallet = new Wallet(req.body);
    await wallet.save();
    return res.json(wallet);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const editWallet = async (req, res) => {
  const { walletId } = req.params;
  try {
    await Wallet.findByIdAndUpdate(walletId, req.body);
    res.json({
      status: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const removeWallet = async (req, res) => {
  const { wallletId } = req.params;
  try {
    await Wallet.findByIdAndRemove(wallletId);
    res.json({
      status: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getWallets,
  getWallet,
  addWallet,
  editWallet,
  removeWallet,
};
