const Thought = require('../models/Thought');
const User = require("../models/User")

module.exports = {
  getThoughts(req, res) { //working
    Thought.find().then((thoughts) => res.json(thoughts)).catch((err) => res.status(400).json({ msg: err.message }));
  },
  
  //async function instead of .then blocks
  async createThought(req, res) { //working
    try {
      const newThought = await Thought.create(req.body)
      console.log(req.body)
      //updates thought array for specific user when that user creates a new thought//
      const updateUser = await User.findByIdAndUpdate(req.params.thoughtId,
        { $addToSet: { thought: req.body } },
        { new: true }
      )

      res.status(200).json({ Thought: newThought, updateUser })
  } catch(err) {
    console.log(err)
    res.status(400).json({ msg: err.message })
  }},

  updateThought(req, res) { //working
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    ).then((thought) => res.json(thought)).catch((err) => res.status(400).json({ msg: err.message }))
  },

  createReaction(req, res) {
    console.log(req.params)
    Thought.findByIdAndUpdate(req.params.reactionId,
      { $addToSet: { reaction: req.body.reactionId } },
      { new: true }
    ).then((newReaction) => newReaction ? res.status(200).json({ message: "Successfully added reaction!" }) : res.json({ message: "Unable to add reaction. Please see error message(s)."} )) //working
    .catch((err) => res.status(400).json({ msg: err.message })); //routing good
  },

  deleteReaction(req, res) {
    console.log(req.params)
    Thought.findByIdAndUpdate(req.params.reactionId,
      { $pull: { reaction: req.body.reactionId } },
      { new: true }
    ).then((newReaction) => newReaction ? res.status(200).json({ message: "Successfully removed reaction." }) : res.json({ message: "Unable to delete reaction. Please see error message(s)."} )) //working
    .catch((err) => res.status(400).json({ msg: err.message })); //routing good
  }
};