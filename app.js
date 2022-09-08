// setup server
const express = require("express");
const bookRoute = require("./routes/bookRoute");
const readingRoute = require("./routes/readingRoute");
const toReadRoute = require("./routes/toReadRoute");
const readRoute = require("./routes/readRoute");
const favBooksRoute = require("./routes/favBooksRoute");
const userRoute = require("./routes/userRoute");
// setup monoose
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/Goodreads', {useNewUrlParser: true});

//  route
app.use("/Myprofile",bookRoute);
app.use("/Myprofile",readingRoute);
app.use("/Myprofile",toReadRoute);
app.use("/Myprofile",readRoute);
app.use("/Myprofile",favBooksRoute);
app.use("/Myprofile",userRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;