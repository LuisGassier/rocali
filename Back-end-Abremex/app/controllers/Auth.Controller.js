const { getToken } = require('../middlewares/Security.Middleware');
const User = require('../models/User.Model');
const { encryptText } = require('../utils/Encrypt');

const login = async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({'Username': username, 'Password': encryptText(password)});
        if(!user) {
            return res.status(404).send({ 
                message: 'Incorrect user or password'
            });
        } else {
            const token = getToken(user, user.Role);
            return res.json({
                user,
                token
            });
        }
    } catch (error) {
        return res.status(500).send({ 
            message: error.message 
        });
    }
};

module.exports = {
    login
};