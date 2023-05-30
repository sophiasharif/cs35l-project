const Survey = require('../models/surveyModel')

//get all responses
const getAllResponses = async (req, res) => {
    //Workout.find({}) finds all workouts and returns them as an array.
    //then sorts with ascending questionId numbers.
    const responses = await Survey.find({}).sort({email: 1});
    res.status(200).json(responses);
}
//get single response
const getResponse = async (req, res) => {
    const my_email = req.params.email;
    // Search for the matching email in the database
    // if want patch and delete, use functions
    // findOneAndDelete() and findOneAndUpdate({email: my_email}, {...req.body}) respectively
    Survey.findOne({ email: my_email })
        .then((surveyResponse) => {
        if (surveyResponse) {
            res.status(200).json(surveyResponse);
        } else {
            res.status(404).json({ error: 'Survey response not found' });
        }
        }).catch((error) => {
        res.status(500).json({ error: error.message });
        });
}
//post new response
const createResponse = async (req, res) => {
    console.log("here's the body");
    console.log(req.body);
    const {email, name, q1, q2, q3, q4, q5, q6, q7} = req.body; //take the json file
                                            //and destructure it.
    try{
        //try to create a new document  
        // recall that MongoDB is a "Document-based" database
        // from the object that we got
        const response = await Survey.create({email, name, q1, q2, q3, q4, q5, q6, q7});
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete response
//update response

module.exports = {
    getAllResponses,
    getResponse,
    createResponse
}