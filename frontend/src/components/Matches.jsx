import React, {useState} from 'react';
import '../styles/Matches.css';
import Match from './Match.jsx';

const Matches = () => {

  const emptyMatches = {
    0: {name : 'self', email : 'self@me.me', compscore : 0}, // matchData[0] contains info about this user
    1: {name : '1', email : '1@1.com', compscore : 0},
    2: {name : '2', email : '2@1.com', compscore : 0},
    3: {name : '3', email : '3@1.com', compscore : 0},
    4: {name : '4', email : '4@1.com', compscore : 0},
    5: {name : '5', email : '5@1.com', compscore : 0},
  };

  const testMatches = { 
    1: {name : 'Alice', email : 'alice@fremacs.com', compscore : 5}, 
    2: {name : 'B', email : 'bob@fremacs.com', compscore : 4}, 
    3: {name : 'C', email : 'c@fremacs.com', compscore : 3}, 
    4: {name : 'D', email : 'd@fremacs.com', compscore : 2}, 
    5: {name : 'E', email : 'e@fremacs.com', compscore : 1}, 
  };
  
  const [matchData, setMatchData] = useState(emptyMatches);

  const resetMatchData = () => {
    setMatchData(emptyMatches);
  };

  const handleMatchData = (event) => {
    setMatchData(testMatches); // TODO: Get from Backend
  };

  return(
      <table className="matchTable">
        <Match 
          name={matchData[1].name}
          email={matchData[1].email}
          compscore={matchData[1].compscore}
        />
        <tr>
          <td>
            {matchData.m2.name}
          </td>
          <td>
            {matchData.m2.email}
          </td>
          <td>
            {matchData.m2.compscore}
          </td>
        </tr>
        <tr>
          <td>
            {matchData.m3.name}
          </td>
          <td>
            {matchData.m3.email}
          </td>
          <td>
            {matchData.m3.compscore}
          </td>
        </tr>
        <tr>
          <td>
            {matchData.m4.name}
          </td>
          <td>
            {matchData.m4.email}
          </td>
          <td>
            {matchData.m4.compscore}
          </td>
        </tr>
        <tr>
          <td>
            {matchData.m5.name}
          </td>
          <td>
            {matchData.m5.email}
          </td>
          <td>
            {matchData.m5.compscore}
          </td>
        </tr>
      </table>
  );
}

export default Matches;