const RefealCode = require("../models/RefealCode.Model");

const getRefeals = async (req, res) => {
  try {
    const redeal = await RedealCode.find();
    return res.json(redeal);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const getRefeal = async (req, res) => {
  const { refealId } = req.params;
  try {
    const refael = await RefealCode.findById(refealId);
    return res.json(refael);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const addRefeal = async (req, res) => {
  try {
    const refeal = new RefealCode(req.body);
    await refeal.save();
    return res.json(refeal);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const editRefeal = async (req, res) => {
  const { refealId } = req.params;
  try {
    await RefealCode.findByIdAndUpdate(refealId, req.body);
    res.json({
      status: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const removeRefeal = async (req, res) => {
  const { refealtId } = req.params;
  try {
    await RefealCode.findByIdAndRemove(refealId);
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
  getRefeals,
  getRefeal,
  addRefeal,
  editRefeal,
  removeRefeal,
};
