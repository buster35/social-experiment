const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: { //getter method?
    type: Date,
    default: Date.now(),
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reaction: [{ //TODO:array of nested documents created with the reactionSchema
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