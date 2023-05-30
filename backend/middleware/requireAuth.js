const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function requireAuth(req, res, next) {
  // verify authentication
  const { authorization } = req.headers;

  // send 401 if there's no authorization token
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required!" });
  }

  // authorization token takes the form "Bearer asdfasdf"; use .split() method to isolate the token itself
  const token = authorization.split(" ")[1];

  try {
    // verify the token and add a user attribute to the request body for use in other middleware
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await (User.findById({ _id })).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized!" });
  }
}

module.exports = requireAuth;
