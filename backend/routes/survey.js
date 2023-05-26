const express = require('express');
const router = express.Router();
const Survey = require('../models/surveyModel')

//get all survey responses
router.get('/', (req, res) =>
{
    res.json(
        {mssg: 'GET all survey responses'}
    )
})
//get single user's survey response
router.get('/:id', (req, res) => {
    res.json(
        {mssg: "GET single user's response"}
    );
})
//post a user's survey response
router.post('/', async (req, res) => {
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
})
module.exports = router;
