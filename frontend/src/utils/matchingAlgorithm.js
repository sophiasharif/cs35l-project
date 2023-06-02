import { useEffect, useState } from "react";
// import { useResults } from "../hooks/useResults";
import { useResponse } from "../hooks/useResponse";

export function matchingAlgorithm(responses) {
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
  const processedResponses = responses.map((res) => ({
    ...res,
    compscore: calculateMatchingScore(res, target),
  }));

  processedResponses.sort((a, b) => b.compscore - a.compscore);
  processedResponses.pop();

  return processedResponses;
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
