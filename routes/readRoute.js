const express = require("express");
const {
    read_get,
    read_addID,
    read_post,
    read_delete
} = require("../Controllers/readServ");
 

 
const router = express.Router();
router.route("/read").get(read_get)
                       .post(read_post)  
router.route("/read/:id").put(read_addID)



module.exports = router;
