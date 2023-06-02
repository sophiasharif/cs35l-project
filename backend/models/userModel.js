const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // library to hash passwords
const validator = require("validator"); // library to validate email & password

// user model
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (name, email, password) {
    
  // validation
  if (!name || !email || !password) {
    throw Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email.");
  }

  // check that email doesn't yet exist in db
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use.");
  }

  // hash password
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({ name, email, password: hash });
  console.log("userModel.js")
  console.log(user) //NAVE

  return user;
};

// static login method
userSchema.statics.login = async function(email, password) {
  
  console.log(email, password)
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("No user with that email.");
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error("Incorrect password.")
  }

  return user
}

module.exports = mongoose.model("User", userSchema);
