import React, {useState} from 'react';
import '../styles/Matches.css';
import Match from './Match.jsx';
// import { useAuthContext } from "../hooks/useAuthContext";

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

const Matches = (props) => {
  /***** CONSTANTS *****/
  const NUMMATCHES = props.matchesToDisplay; // Set to however many matches to print on Results page
                     // any nonnegative int is allowed regardless of how many users in backend
  const responses = props.responses; // An array of User JSONs, access Users with responses[0], etc. 
  let refinedResponses = {};

  /*
  const testMatches = { 
    1: {name : 'Alice', email : 'alice@fremacs.com', compscore : 5}, 
    2: {name : 'B', email : 'bob@fremacs.com', compscore : 4}, 
    3: {name : 'C', email : 'c@fremacs.com', compscore : 3}, 
    4: {name : 'D', email : "someone.email", compscore : 1}, 
    5: {name : 'Joe', email : 'd@fremacs.com', compscore : 0}, 
  };
  */
  
  console.log("In matches:");
  console.log(responses[0]);

  const [matchData, setMatchData] = useState(responses);
  
  const oneMatch = (matchNum) => {
    return (
      <Match
        key={matchNum}
        name={matchData[matchNum].name}
        email={matchData[matchNum].email}
        compscore={matchData[matchNum].compscore}
      />
    );
  }

  const nMatches = [];

  for (let i = 1; i <= NUMMATCHES; i++) {
    if (matchData[i])
      nMatches.push(oneMatch(i));
    else
      nMatches.push(<Match name="" email="" compscore={0} key={i} />)
  }

  return(
      <table className="matchTable">
        {nMatches}
      </table>
  );
}

export default Matches;