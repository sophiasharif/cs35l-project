import '../styles/Matches.css';
import Match from './Match.jsx';
import NoMatch from './NoMatch.jsx';
import { matchingAlgorithm } from '../utils/matchingAlgorithm';

const Matches = (props) => {
  /* Constants */
  const numMatches = props.matchesToDisplay; // Set to however many matches to print on Results page
                     // any nonnegative int is allowed regardless of how many users in backend
  let responses = props.responses; // An array of User JSONs, access Users with responses[0], etc. 
  let matchData = {};
  if (responses)
  {
    matchData = matchingAlgorithm(responses);
    if (!matchData)
      matchData = {};
  }

  const oneMatch = (matchNum) => {
    return (
      <Match
        key={matchNum}
        mykey={matchNum}
        name={matchData[matchNum].name}
        email={matchData[matchNum].email}
        compscore={matchData[matchNum].compscore}
        maxscore={props.maxscore}
      />
    );
  }

  const MatchTable = [];
  let matchNotFound = 0;

  for (let i = 0; i < numMatches; i++) {
    if (matchData[i])
    {
      MatchTable.push(oneMatch(i));
    }
    else
    {
      MatchTable.push(<NoMatch key={i} />)
      matchNotFound = 1;
      break;
    }
  }
  // Display "Found N matches" rather than "Found 12 matches" if N < 12   
  props.setSuccessfulMatches(MatchTable.length - matchNotFound) 

  return(
      <table>
        {MatchTable}
      </table>
  );
}

export default Matches;