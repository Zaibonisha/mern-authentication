const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true }, // Add the email field
  passwordHash: { type: String, required: true }, // Add the password field
  username: { type: String, required: true }, // Add the username field
});

const User = mongoose.model("user", userSchema);

module.exports = User;