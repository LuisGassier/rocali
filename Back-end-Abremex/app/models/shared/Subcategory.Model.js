const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
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

module.exports = mongoose.model('subcategory', subcategorySchema);