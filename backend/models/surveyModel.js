const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the document
const surveySchema = new mongoose.Schema({
    email: String,
    name: String,
    q1: String,    
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    },   
    { // Schema-level options
        required: true,
        strict: 'throw'
      }
  );
//a model applys a schema to something

module.exports = mongoose.model('Response', surveySchema);