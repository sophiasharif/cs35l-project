// import packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// route handlers
const userRoutes = require('./routes/user')

// express app
const app = express();

app.get("/", (req, res, next) => {
  res.send("<h1> Hello Friemacs! </h1>");
});

// connect to mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log("listening to port 3000");
    });
  })
  .catch((err) => console.log(err));
