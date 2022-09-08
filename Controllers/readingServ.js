const book = require('../models/book');
const reading = require('../models/reading');


// GET ALL
const reading_get = (req, res) => {
  reading.find().sort({ createdAt: -1 })
    .then(result => {
      res.send( { reading: result });
    })
    .catch(err => {
      console.log(err);
    });
};

// POST 
// Send book id

const reading_post = (req, res) => {
reading().save()
.then(result => {
  res.send( {books: result, title: "list added!"}, );
})
};

// PUT by ID
// parameter ID of the reading list of the user , Body ID of the book
const reading_addID = (req, res) => {
    book.findById(req.body._id)
    .then(result => {
      const Book = result
    reading.findById(req.params.id).then(result => {
      result.updateOne(
        { $push: { books : Book } },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });

      })
    })  
    .catch(err => {
      console.log("err", err);
    });

};

module.exports = {

  reading_get, 
  reading_post,
  reading_addID

}