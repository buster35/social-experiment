const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  thought: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thought",
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Friend",
  },
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

userSchema.pre("save", function(next) {
  this.password = bcrypt(this.password, 10);
  next();
})

const User = model("user", userSchema);
module.exports = User;