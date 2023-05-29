const express = require('express');
const router = express.Router();
const {
    getAllResponses,
    createResponse
} = require("../controllers/surveyController");
 
//get all survey responses
router.get('/', getAllResponses);
//get single user's survey response
router.get('/:id', (req, res) => {
    res.json(
        {mssg: "GET single user's response"}
    );
})
//post a user's survey response
router.post('/', createResponse);

//do we need delete and update? 
router.delete('/:id', async (req, res) => {
    res.json(
        {mssg: "DELETE a users survey responses"}
    );
})

router.patch('/:id', async (req, res) => {
    res.json(
        {mssg: "PATCH a users survey responses"}
    );
})

module.exports = router;
