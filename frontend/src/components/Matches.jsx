import '../styles/Matches.css';
import Match from './Match.jsx';
import { matchingAlgorithm } from '../utils/matchingAlgorithm';

const Matches = (props) => {
  /* Constants */
  const numMatches = props.matchesToDisplay; // Set to however many matches to print on Results page
                     // any nonnegative int is allowed regardless of how many users in backend
  let responses = props.responses; // An array of User JSONs, access Users with responses[0], etc. 
  let rankedMatches = matchingAlgorithm(responses);
  let matchData = rankedMatches;

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

  const nMatches = [];

  for (let i = 1; i <= numMatches; i++) {
    if (matchData[i])
      nMatches.push(oneMatch(i));
    else
    {
      nMatches.push(<Match name="" email="" compscore={0} maxscore={props.maxscore} mykey={i} key={i} />)
      break;
    }
  }

  return(
      <table>
        {nMatches}
      </table>
  );
}

export default Matches;