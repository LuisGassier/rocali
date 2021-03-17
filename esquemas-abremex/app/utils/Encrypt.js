const crypto = require('crypto');
const config = require('../config/config.js');

const encryptText = (text) => {
    var mykey = crypto.createCipher('aes-128-cbc', config.SECRET);
    var mystr = mykey.update(text, 'utf8', 'hex');
    mystr += mykey.final('hex');

    return mystr;
};

const decryptText = (text) => {
    var mykey = crypto.createDecipher('aes-128-cbc', config.SECRET);
    var mystr = mykey.update(text, 'hex', 'utf8');
    mystr += mykey.final('utf8');

    return mystr;
};

module.exports = {
    encryptText,
    decryptText
};