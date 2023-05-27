// models
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" }); // note: store correct secret token in .env
}

// login user
async function loginUser(req, res) {

  console.log('request body',req.body)

  const {email, password} = req.body
  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// sign up user
async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { loginUser, signupUser };
