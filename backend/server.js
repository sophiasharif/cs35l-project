// import packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// route handlers
const userRoutes = require('./routes/user');
const surveyRoutes = require('./routes/survey');

// express app
const app = express();

app.get("/", (req, res, next) => {
  res.send("<h1> Hello Friemacs! </h1>");
});

/**
 * The order of middleware matters!
 * We have to attach the json before I add
 * my routes, otherwise, the body object 
 * is undefined.
 */
app.use(express.json());
//use Harry's survey routes
app.use('/api/survey', surveyRoutes);
//middleware that adds JSON to the request object


// connect to mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(4000, () => {
      console.log("listening to port 4000");
    });
  })
  .catch((err) => console.log(err));
