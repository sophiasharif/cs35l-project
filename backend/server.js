// import packages
require("dotenv").config();
//note: express uses http by default
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

// route handlers
const userRoutes = require('./routes/user');
const surveyRoutes = require('./routes/survey');

// express app
const app = express();
app.use(express.json()); // Parse JSON in the request body
app.use(cors()); // allow cross-origin resource sharing (allows frontend to communicate with backend)

app.get("/", (req, res, next) => {
  res.send("<h1> Hello Friemacs! </h1>");
});


/**
 * The order of middleware matters!
 * We have to attach the json before I add
 * my routes, otherwise, the body object 
 * is undefined.
 */
//use Harry's survey routes
app.use('/api/survey', surveyRoutes);
//middleware that adds JSON to the request object

// routes
app.use('/api/user', userRoutes)

const PORT = process.env.PORT

// connect to mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
  