const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the document
const surveySchema = new mongoose.Schema({
    q1: {
        type: String,
        required: true
    },
    q2: {
        type: String,
        required: true
    },
    q3: {
        type: String,
        required: true
    },
    q4: {
        type: String,
        required: true
    },
    q5: {
        type: String,
        required: true
    },
    q6: {
        type: String,
        required: true
    },
    q7: {
        type: String,
        required: true
    }
  });
//a model applys a schema to something

module.exports = mongoose.model('Response', surveySchema);