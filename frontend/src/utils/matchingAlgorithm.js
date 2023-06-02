export async function matchingAlgorithm(targetName) {
  try {
    // Retrieve all results from the database
    const responses = await fetch("http://localhost:3000/api/survey/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, q1, q2, q3, q4, q5, q6, q7 }),
    });

    target = responses.find(response => response.name === targetName);

    // Perform the matching algorithm with the results and target person
    return matchResults(responses, target);
  } catch (error) {
    // Handle any errors that occurred during the retrieval
    console.error(error);
    // Handle the error appropriately (e.g., logging, error response, etc.)
  }
}

function matchResults(responses, target) {

  for (const response of responses) {
    // Compare the relevant fields and calculate matching score
    response.score = calculateMatchingScore(response, target);
  }

  responses.sort((a, b) => b.score - a.score);

  responses.splice(responses.length - 1, 1);

  return responses;
}


function calculateMatchingScore(result, target) {
  let score = 0;

  if(result['name'] === target['name'] && result['email'] === target['email']) {
    return -1;
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