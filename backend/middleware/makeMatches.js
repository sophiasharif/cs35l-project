const mongoose = require("mongoose");
const { getAllResponses } = require("../controllers/surveyController");

const target = getCurrentUser(); // to be finished
  
async function runMatchingAlgorithm(target) {
  try {
    // Retrieve all results from the database
    const responses = await getAllResponses();

    // Perform the matching algorithm with the results and target person
    matchResults(responses, target);
  } catch (error) {
    // Handle any errors that occurred during the retrieval
    console.error(error);
    // Handle the error appropriately (e.g., logging, error response, etc.)
  }
}

function matchResults(responses, target) {
  let match = {
    result: null,
    score: 0
  };

  for (const response of responses) {
    if (response.name === target.name) {
      continue;  // Skip matching with the target itself
    }

    // Compare the relevant fields and calculate matching score
    const score = calculateMatchingScore(response, target);

    if (score > match.score) {
      match.result = response;
      match.score = score;
    }
  }

  if (match.result === null) {
    throw new Error('No match found.');
  }

  return match;
}


function calculateMatchingScore(result, target) {
  let score = 0;

  if(result['name'] === target['name'] && result['email'] === target['email']) {
    return 0;
  }

  for (let answer in target) {
    if (answer === 'name' || answer === 'email') {
      continue;
    }

    if (result.hasOwnProperty(answer) && result[answer] === target[answer]) {
      score++;
    }
  }

  return score;
}

