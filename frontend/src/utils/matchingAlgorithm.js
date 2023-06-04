import { useEffect, useState } from "react";
import { useResponse } from "../hooks/useResponse";

export function matchingAlgorithm(responses) {
  if (!responses)
    return;
    
  const { response } = useResponse();
  const [matchedResponses, setMatchedResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const target = await response();

        const processedResponses = matchResults(responses, target);
        setMatchedResponses(processedResponses);
      } catch (error) {
        console.error(error);
        setMatchedResponses([]);
      }
    };
    fetchData();
  }, [response]);

  return matchedResponses;
}

function matchResults(responses, target) {
  // Return immediately if the length of the responses object is undefined 
  // (I.e. the wrong type of object has been passed to this function)
  if ((typeof(responses.length)) === (typeof(undefined)))
    return {}; // <Matches/> component demands an empty array if no matches are found

  const processedResponses = responses.map((res) => ({
    ...res,
    compscore: calculateMatchingScore(res, target),
  }));

  processedResponses.sort((a, b) => b.compscore - a.compscore);
  processedResponses.pop();

  return processedResponses;
}

function calculateMatchingScore(result, target) {
  if (result.name === target.name && result.email === target.email) {
    return -1;
  }
  let score = 0;

  for (let answer in target) {
    if (answer === "name" || answer === "email" || answer === '_id' || answer === '__v') {
      continue;
    }

    if (result.hasOwnProperty(answer) && result[answer] === target[answer]) {
      score++;
    }
  }
  return score;
}
