const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({ //specifies which fields are required.
    questionId: {                   //and the types they are
        type: Number,
        required: true
    },
    selection: {
        type: Number,
        required: true
    } 
}, {timestamps: true});

//a model applys a schema to something

module.exports = mongoose.model('Response', surveySchema);