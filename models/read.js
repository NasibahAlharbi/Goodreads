const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const read = new Schema({
  books: Object
    });

 
module.exports = mongoose.model("Read", read);

