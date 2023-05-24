const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction, Friend } = require('../models');

module.exports = {
  createReaction(req, res) {
    Reaction.create(req.body).then((reaction) => res.json(reaction)).catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Reaction.findOneAndRemove({ _id: req.params.reactionId }).then((reaction) => res.json(reaction)).catch((err) => res.status(500).json(err));
  },
};