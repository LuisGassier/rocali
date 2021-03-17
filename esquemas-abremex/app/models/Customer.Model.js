const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const File = require('./shared/File.Model');
const Address = require('./shared/Address.Model');

const customerSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    Addres: {
        type: [Address],
        required: true
    },
    PaymentMethod: {
        type: Object,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Mail: {
        type: String,
        required: true
    },
    AcceptMarketing: {
        type: Boolean,
        required: true
    },
    Image: {
        type: File,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    RFC: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('customer', customerSchema);