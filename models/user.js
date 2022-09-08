const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

const user = new Schema({
    userName: {
        type: String,
        required: true,
        uniqeunique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },

    userAge: {
        type: String,
        required: true,
    },
    userGender: {
        type: String,
        required: false,
    },
    userDOB: {
        type: Date,
        required: false,
    },
    books:[{
      read: { type: mongoose.Schema.Types.ObjectId, ref: 'Read' },
      reading: { type: mongoose.Schema.Types.ObjectId, ref: 'Reading' },
      toRead: { type: mongoose.Schema.Types.ObjectId, ref: 'ToRead' },
      favBooks: { type: mongoose.Schema.Types.ObjectId, ref: 'FavBooks' },
      }],

    });

module.exports = mongoose.model("User", user);
