const jwt = require('jsonwebtoken');
const config = require('../config/config');

const getToken = (user, role = 'null') => {
    const token = jwt.sign({
        user,
        role
    }, config.SECRET, {
        expiresIn: (60 * 60 * 24) * 30
    });

    return token;
};

const verifyToken = (req, res, next) => {
    const token = req.query.token;

    jwt.verify(token, config.SECRET, (err) => {
        if(err) {
            return res.status(401).json({
                errors: err.message
            });
        }
        next();
    });
};

module.exports = {
    getToken,
    verifyToken
};