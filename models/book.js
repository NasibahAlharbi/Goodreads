const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId

const book = new Schema({
  bookID:  require("mongodb").ObjectId,
  bookName: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  bookTranslator: {
    type: String,
    required: false,
  },
  bookRate: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  bookRatings: {
    type: Number,
    default: 0,
    min: 0,
  },
  userProgress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  userRating:{
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },

    });
 
module.exports = mongoose.model("Book", book);

