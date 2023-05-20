// models
const User = require("../models/userModel");

// login user
async function loginUser(req, res) {
  res.json({ msg: "login user" });
}

// sign up user
async function signupUser(req, res) {
  res.json({ msg: "signup user" });
}

module.exports = { loginUser, signupUser };
