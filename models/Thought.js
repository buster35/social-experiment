const { ObjectId } = require('mongoose').Types;
const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  username: {
    type: String,
    required: true,
  },
  reaction: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reaction",
  }],
},
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function() {
  return this.reaction.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought;