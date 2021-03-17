const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Subcategory = require('./shared/Subcategory.Model');

const categorySchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Subcategory: {
        type: [Subcategory],
        required: true
    }
});

module.exports = mongoose.model('category', categorySchema);