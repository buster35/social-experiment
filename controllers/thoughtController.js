const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction, Friend } = require('../models');
//TODO: do i need all models required in?

module.exports = {
  getThoughts(req, res) {
    Thought.find().then((thoughts) => res.json(thoughts)).catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body).then((thought) => res.json(thought)).catch((err) => res.status(500).json(err));
  },
};