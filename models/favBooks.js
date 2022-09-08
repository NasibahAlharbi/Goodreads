const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const favBooks = new Schema({
    books:{type: Array,
    defult: []}
    });

 
module.exports = mongoose.model("FavBooks", favBooks);

