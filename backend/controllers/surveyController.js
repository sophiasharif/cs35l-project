const Survey = require('../models/surveyModel')

//get all responses
const getAllResponses = async (req, res) => {
    //Workout.find({}) finds all workouts and returns them as an array.
    //then sorts with ascending questionId numbers.
    const responses = await Survey.find({}).sort({questionId: 1});
    res.status(200).json(responses);
}
//get single response
//post new response
const createResponse = async (req, res) => {
    console.log(req.body);
    const {questionId, selection} = req.body; //take the json file
                                            //and destructure it.
    try{
        //try to create a new document  
        // recall that MongoDB is a "Document-based" database
        // from the object that we got
        const workout = await Survey.create({questionId, selection});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete response
//update response

module.exports = {
    getAllResponses,
    createResponse
}