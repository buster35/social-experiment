const { ObjectId } = require('mongoose').Types;
const User = require('../models/User');

//any aggregate User functions will go here

module.exports = {
  getAllUsers(req, res) { //working
    User.find().then((users) => res.json(users)).catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) { //working
    User.findOne({ _id: req.params.userId }).then((user) => res.json(user)).catch((err) => res.status(500).json(err)); //create a userId property that ref's to Mongoose Id.
  },
  createUser(req, res) { //working
    User.create(req.body).then((user) => res.json({ user })).catch((err) => res.status(500).json(err)); //req.body is our JSON input in Insomnia
  },
  //TODO: add auto updates to deleteUser if a user is deleted?
  deleteUser(req, res) { //working
    User.findOneAndRemove({ _id: req.params.userId }).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }).then((updatedUser) => res.json(updatedUser)).catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findByIdAndUpdate(req.params.userId,
      { $addToSet: req.body },
      { runValidators: true, new: true }
    ).then((newFriend) => newFriend ? res.status(200).json({ message: "Successfully added friend!" }) : res.json({ message: "Unable to add friend. Please see error message(s)."} ))
    .catch((err) => res.status(400).json(err));
  },
  };
