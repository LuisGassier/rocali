const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    Alias: {
        type: String,
        requiered: true
    },
    Street: {
        type: String,
        requiered: true
    },
    ENumber: {
        type: Number,
        requiered: true
    },
    INumber: {
        type: String,
        requiered: true
    },
    References: {
        type: String,
        requiered: true
    },
    Suburb: {
        type: String,
        requiered: true
    },
    City: {
        type: String,
        requiered: true
    },
    State: {
        type: String,
        requiered: true
    },

});

module.exports = AddressSchema;