const express = require("express");
const {
    favBooks_get, 
    favBooks_addID,
    favBooks_post
} = require("../Controllers/favBooksServ");
 
 
const router = express.Router();
router.route("/favBooks").get(favBooks_get)
                       .post(favBooks_post)  
router.route("/favBooks/:id").put(favBooks_addID)

module.exports = router;
