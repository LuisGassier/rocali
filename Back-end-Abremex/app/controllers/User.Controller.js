const User = require('../models/User.Model');
const { encryptText, decryptText } = require('../utils/Encrypt');

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const getUser = async(req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        return res.json(user);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const addUser = async(req, res) => {
    try {
        const user = new User(req.body);
        user.Password = encryptText(user.Password);
        await user.save();
        return res.json(user);
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const editUser = async(req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndUpdate(userId, req.body);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

const removeUser = async(req, res) => {
    const { userId } = req.params;
    try {
        await User.findByIdAndRemove(userId);
        res.json({
            status: true
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser
};