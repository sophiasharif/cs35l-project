const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // library to hash passwords

// user model
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
userSchema.statics.signup = async function(email, password) {

  // check that email doesn't yet exist in db
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use.");
  }

  // hash password
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
