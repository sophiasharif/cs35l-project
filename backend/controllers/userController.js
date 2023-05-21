// models
const User = require("../models/userModel");

// login user
async function loginUser(req, res) {
  res.json({ msg: "login user" });
}

// sign up user
async function signupUser(req, res) {

  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { loginUser, signupUser };
