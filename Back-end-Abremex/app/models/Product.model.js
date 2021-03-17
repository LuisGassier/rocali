const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const File = require('./shared/File.Model');
const Subcategory = require('./shared/Subcategory.Model');

const productSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Image: {
        type: [File],
        required: true
    },
    Discount: {
        type: Number,
        required: true
    },
    Category: {
        type: Subcategory,
        required: true
    }
});

module.exports = mongoose.model('product', productSchema);