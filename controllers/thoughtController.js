const { ObjectId }= require('mongoose').Types;
const Thought = require('../models/Thought');
const User = require("../models/User")

module.exports = {
  getThoughts(req, res) { //working
    Thought.find().then((thoughts) => res.json(thoughts)).catch((err) => res.status(500).json(err));
  },
  
  //async function instead of .then blocks
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body)
      
      const updateUser = await User.findByIdAndUpdate(req.body.username, { thought: newThought._id }, { new: true })
  
      res.status(200).json({ Thought: newThought, updateUser })
  } catch(err) {
    console.log(err)
    res.status(400).json({ msg: err.message })
  }},

  updateThought(req, res) {

  }

};