const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction, Friend } = require('../models');

module.exports = {
  createFriend(req, res) {
    Friend.create(req.body).then((friend) => res.json(friend)).catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    Friend.findOneAndRemove({ _id: req.params.friendId }).then((friend) => res.json(friend)).catch((err) => res.status(500).json(err));
  },
};