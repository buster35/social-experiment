const Thought = require('../models/Thought');
const User = require("../models/User")

module.exports = {
  getThoughts(req, res) {
    Thought.find().then((thoughts) => res.json(thoughts)).catch((err) => res.status(500).json(err));
  },
  
  async createThought(req, res) {
    console.log(req.body)
    try {
      const newThought = await Thought.create(req.body)
      const updateUser = await User.findByIdAndUpdate(req.body.username, { Thought: newThought._id }, { new: true })
  
      res.status(200).json({ Thought: newThought, updateUser })
  } catch(err) {
    console.log(err)
    res.status(400).json({ msg: err.message })
  }}};