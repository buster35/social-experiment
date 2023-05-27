const { ObjectId } = require('mongoose').Types;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
      // validate: [validateEmail, "Please use a valid email address"],
    },
    thought: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friend: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//Nice email validation fn from Stack Overflow: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// function validateEmail(data) {
//   let emailRegex = `${/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}`;
//   return emailRegex.test(data);
// };

//virtual to add additional info for # of friends in query result for each User
userSchema.virtual("friendCount").get(function () {
  return this.friend.length;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
