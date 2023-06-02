const express = require('express');
const {
    getAllResponses,
    getResponse,
    createResponse
} = require("../controllers/surveyController");
const requireAuth = require('../middleware/requireAuth')

// instantiate router
const router = express.Router();

// require auth for all survey routes
router.use(requireAuth);
 
//get all survey responses
router.get('/', getAllResponses);
//get single user's survey response
router.get('/:email', getResponse);
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
