const user = require('../models/user');



// GET ALL ELEMENTS functions
const user_get = (req, res) => {
  user.find().sort({ createdAt: -1 })
    .then(result => {
      res.send({ users: result});
    })
    .catch(err => {
      console.log(err);
    });
}

// GET ID
const user_getID = (req, res) => {
  const id = req.params.id;
  user.findById(id)
    .then(result => {
      res.send( { user: result });
    })
    .catch(err => {
      console.log("err");
    });
}


// GET userName
const user_getuserName = (req, res) => {
  const id = req.params;
  user.find(id)
    .then(result => {
      res.send( { user: result });
    })
    .catch(err => {
      console.log(id);
    });
}

// POST
const user_add = async (req, res) => {
  user(req.body).save()
  .then(result => {
    res.send( {user: result, title: "user added!"}, );
  })
};


// PUT
const user_update = (req, res) => {
  const {id}= req.params;
  user.findByIdAndUpdate(id,req.body).then(result => {
  res.send( { user: result , title: "user updated!"});
})
.catch(err => {
  console.log(err);
}); 
}


// DELETE

const user_delete = (req, res) => {
  const id = req.params.id;
  user.findByIdAndDelete(id)
  .then(result => {
      res.send( { user: result});
    })
    .catch(err => {
      console.log(err);
    });
}



module.exports = {
  user_get,
  user_getID,
  user_add,
  user_update,
  user_delete,
  user_getuserName
}


