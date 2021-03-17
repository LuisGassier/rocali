const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    FileName: {
        type: String,
        requiered: true
    },
    FileURL: {
        type: String,
        requiered: true
    },
    ThumbnailName: {
        type: String,
        requiered: true
    },
    ThumbnailURL: {
        type: String,
        requiered: true
    },
    FileType: {
        type: String,
        requiered: true
    },
});

module.exports = FileSchema;