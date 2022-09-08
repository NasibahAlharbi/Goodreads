const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const toRead = new Schema({
    books:{type: Array,
        defult: []}
    });

module.exports = mongoose.model("ToRead", toRead);
