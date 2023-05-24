const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please use a valid email address"]
  },
  thought: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thought",
  }],
  friend: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

//Nice email validation fn from Stack Overflow: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
const validateEmail = function(email) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email)
};

//"hook" for mongoose; BEFORE we SAVE any user record, encrypt the user's password
userSchema.pre("save", function(next) {
  this.password = bcrypt(this.password, 10);
  next();
});

//virtual to add additional info for # of friends in query result for each User
userSchema.virtual("friendCount").get(function() {
  return this.friend.length
});

const User = mongoose.model("User", userSchema);
module.exports = User;