
const book = require('../models/book');
const read = require('../models/read');



// GET ALL
const read_get = (req, res) => {
    read.find().sort({ createdAt: -1 })
      .then(result => {
        res.send( { read: result });
      })
      .catch(err => {
        console.log(err);
      });
};

// POST 
// Send book id

const read_post = (req, res) => {
  read().save()
  .then(result => {
    res.send( {books: result, title: "list added!"}, );
  })
};

  // PUT by ID
  // parameter ID of the read list of the user , Body ID of the book
const read_addID = (req, res) => {
      book.findById(req.body._id)
      .then(result => {
        const Book = result
      read.findById(req.params.id).then(result => {
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

  read_get, 
  read_addID,
  read_post,
}