const book = require('../models/book');
const favBooks = require('../models/favBooks');


// GET ALL
const favBooks_get = (req, res) => {
  favBooks.find().sort({ createdAt: -1 })
    .then(result => {
      res.send( { favBooks: result });
    })
    .catch(err => {
      console.log(err);
    });
};

// POST 
// Send book id

const favBooks_post = (req, res) => {
favBooks().save()
.then(result => {
  res.send( {books: result, title: "list added!"}, );
})
};

// PUT by ID
// parameter ID of the favBooks list of the user , Body ID of the book
const favBooks_addID = (req, res) => {
    book.findById(req.body._id)
    .then(result => {
      const Book = result
    favBooks.findById(req.params.id).then(result => {
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

  favBooks_get, 
  favBooks_addID,
  favBooks_post
}