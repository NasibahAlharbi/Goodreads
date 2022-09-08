const book = require('../models/book');



// GET ALL ELEMENTS functions
const book_get = (req, res) => {
  book.find().sort({ createdAt: -1 })
    .then(result => {
      res.send({ books: result});
    })
    .catch(err => {
      console.log(err);
    });
}

// GET ID
const book_getID = (req, res) => {
  const id = req.params.id;
  book.findById(id)
    .then(result => {
      res.send( { book: result });
    })
    .catch(err => {
      console.log("err");
    });
}

// GET bookAuthor

const book_getBookAuthor = (req, res) => {
  const id = req.params;
  book.find(id)
    .then(result => {
      res.send( { book: result });
    })
    .catch(err => {
      console.log(id);
    });
}

// GET bookName
const book_getBookName = (req, res) => {
  const id = req.params;
  book.find(id)
    .then(result => {
      res.send( { book: result });
    })
    .catch(err => {
      console.log(id);
    });
}

// POST
const book_add = async (req, res) => {
  book(req.body).save()
  .then(result => {
    res.send( {book: result, title: "book added!"}, );
  })
};


// PUT
const book_update = (req, res) => {
  const {id}= req.params;
  book.findByIdAndUpdate(id,req.body).then(result => {
  res.send( { book: result , title: "book updated!"});
})
.catch(err => {
  console.log(err);
}); 
}


// DELETE

const book_delete = (req, res) => {
  const id = req.params.id;
  book.findByIdAndDelete(id)
  .then(result => {
      res.send( { book: result});
    })
    .catch(err => {
      console.log(err);
    });
}



module.exports = {
  book_get,
  book_getID,
  book_add,
  book_update,
  book_delete,
  book_getBookAuthor,
  book_getBookName
}


