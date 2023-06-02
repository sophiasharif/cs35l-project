import { useResults } from "../hooks/useResults";
import { useResponse } from "../hooks/useResponse";

export async function matchingAlgorithm() {
  const { result } = useResults();
  const { response } = useResponse();

  try {
    const responses = await result();
    const target = await response();

    // Perform the matching algorithm with the results and target person
    const matchedResponses = matchResults(responses, target);

    return matchedResponses;

  } catch (error) {
    // Handle any errors that occurred during the retrieval
    console.error(error);
    // Handle the error appropriately (e.g., logging, error response, etc.)
    return null;
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

  if (result.name === target.name && result.email === target.email) {
    return -1;
  }

  for (let answer in target) {
    if (answer === "name" || answer === "email") {
      continue;
    }

    if (result.hasOwnProperty(answer) && result[answer] === target[answer]) {
      score++;
    }
  }

  return score;
}
