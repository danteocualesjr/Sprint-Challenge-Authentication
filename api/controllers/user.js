const bcrypt = require('bcrypt');
const User = require('../models/userModels.js');

// const jwt = require('jsonwebtoken');
// const { mysecret } = require('../../config');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create(req.body)
    .then(username => {
      res.status(201).json({ username })
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  createUser
};
