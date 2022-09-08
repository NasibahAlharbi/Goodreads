const express = require("express");
const {
    toRead_get, 
    toRead_addID,
    toRead_post
} = require("../Controllers/toReadServ");


 
const router = express.Router();
router.route("/toRead").get(toRead_get)
                       .post(toRead_post)  
router.route("/toRead/:id").put(toRead_addID)



module.exports = router;


