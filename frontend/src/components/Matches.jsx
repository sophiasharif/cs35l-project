import React, {useState} from 'react';
import '../styles/Matches.css';

const Matches = () => {

  const emptyMatches = {
    m1: '1',
    m2: '2',
    m3: '3',
    m4: '4',
    m5: '5',
  };
  
  const [matchData, setMatchData] = useState(emptyMatches);

  const resetMatchData = () => {
    setMatchData(emptyMatches);
  };

  const handleMatchData = (event) => {
    setMatchData({m1: 'Alice', m2: 'Bob', m3: 'Celeste', m4: 'Dan', m5: 'Eve'});
  };

  return(
      <table className="matchTable">
        <tr>
          <td>
            {matchData.m1}
          </td>
        </tr>
      </table>
  );
}

export default Matches;