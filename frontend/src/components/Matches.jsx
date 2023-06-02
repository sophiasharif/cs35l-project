import React, {useState} from 'react';
import '../styles/Matches.css';
import Match from './Match.jsx';
// import { useAuthContext } from "../hooks/useAuthContext";

const Matches = (props) => {
  /***** CONSTANTS *****/
  const NUMMATCHES = props.matchesToDisplay; // Set to however many matches to print on Results page
                     // any nonnegative int is allowed regardless of how many users in backend

  // TODO: Actually get users (name, email, compscore) from Backend
  const testMatches = { 
    1: {name : 'Alice', email : 'alice@fremacs.com', compscore : 5}, 
    2: {name : 'B', email : 'bob@fremacs.com', compscore : 4}, 
    3: {name : 'C', email : 'c@fremacs.com', compscore : 3}, 
    4: {name : 'D', email : "someone.email", compscore : 1}, 
    5: {name : 'Joe', email : 'd@fremacs.com', compscore : 0}, 
  };
  
  const [matchData, setMatchData] = useState(testMatches);
  
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