const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const File = require('./shared/File.Model');

const userSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Mail: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    File: {
        type: File
    },
    UserActive : {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);