const db = require("../models");
const User = db.user;

// Login user
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
  .then((user) => {
    if(user.password != req.body.password) {
      res.status(401).send({
        message: "The email or password is incorrect.",
      });
      return
    }
    res.send({
      ok: true,
      token: 'fake-jwt-token',
    })

  }).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while login the user.",
    });
  });
};

// Create new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a user
  const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  // Save user in the database
  user
    .save(user)
    .then(data => {
      res.send({
        ok: true,
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
        },
        token: 'fake-jwt-token',
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};