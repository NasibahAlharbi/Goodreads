const express = require("express");
const {
  user_get,
  user_getID,
  user_add,
  user_update,
  user_delete,
  user_getuserName
} = require("../Controllers/userServ");
 
const router = express.Router();


router.route("/users").get(user_get)
                      .post(user_add)

router.route("/users/:id").put(user_update)
                          .get(user_getID)
                          .delete(user_delete);

router.route("/users/user/:userName").get(user_getuserName)


module.exports = router;
