const express = require("express");
const {

    
  reading_get, 
  reading_post,
  reading_addID, 

} = require("../Controllers/readingServ");
const router = express.Router();


router.route("/reading").get(reading_get)
                       .post(reading_post)  
router.route("/reading/:id").put(reading_addID)



module.exports = router;
