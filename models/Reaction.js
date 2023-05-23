const mongoose = require("mongoose");

//TODO: what do i need for the reaction body?
const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: {}
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;