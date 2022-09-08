const express = require("express");
const {
  book_get,
  book_getID,
  book_add,
  book_update,
  book_delete,
  book_getBookAuthor,
  book_getBookName
} = require("../Controllers/bookServ");
 
const router = express.Router();


router.route("/books").get(book_get)
                      .post(book_add)

router.route("/books/:id").put(book_update)
                          .get(book_getID)
                          .delete(book_delete);

router.route("/books/Author/:bookAuthor").get(book_getBookAuthor)
router.route("/books/Book/:bookName").get(book_getBookName)


module.exports = router;
