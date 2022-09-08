const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
const reading = new Schema({
  books: Object

    });

module.exports = mongoose.model("Reading", reading);

