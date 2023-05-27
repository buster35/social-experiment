const mongoose = require("mongoose");
const getRandomReaction = require("../utils/data")

const reactionSchema = new mongoose.Schema({
  reaction: {
    default: function () {
      getRandomReaction()
    }
  },
  thoughtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thought"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;