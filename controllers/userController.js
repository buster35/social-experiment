const { ObjectId } = require('mongoose').Types;
const User = require('../models/User');

//any aggregate User functions will go here

module.exports = {
  getAllUsers(req, res) {
    User.find().then((users) => res.json(users)).catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId }).select("__v").then((user) => res.json(user)).catch((err) => res.status(500).json(err)); //create a userId property that ref's to Mongoose Id.
  },
  createUser(req, res) { //500 status w/ err msg working; error coming from running (after req passes through routes and this fn is called on)
    console.log(req.body) //working
    User.create(req.body).then((user) => res.json({ user })).catch((err) => res.status(500).json(err)); //req.body is our JSON input in Insomnia
  },
  //TODO: add auto updates to deleteUser if a user is deleted?
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId }).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }).then((updatedUser) => res.json(updatedUser)).catch((err) => res.status(500).json(err));
  }

  //TODO: controllers to update users with friends, reactions to their thoughts, etc.
  };
