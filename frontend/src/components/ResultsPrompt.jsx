import React, {useState} from 'react';

const ResultsPrompt = (props) => {
  // Props: obtainResponses, matchesToDisplay, maxMatches
  if (!props.matchesToDisplay) {
    return(
      <>
        <h3>Let's find some friends for you</h3>
        <button onClick={props.obtainResponses}>Start Making Friends</button>
        <br></br><br></br>
      </>
    );
  }
  else if (parseInt(props.matchesToDisplay) >= parseInt(props.maxMatches)) {
    return(
      <>
        <h3>Here's {props.matchesToDisplay} people we found for you to befriend!</h3>
        <h4>If you're not satisfied with your results, try adjusting your survey responses to better correlate with your core beliefs.</h4>
      </>
    );
  }
  else {
    return(
      <>
        <h3>Here's {props.matchesToDisplay} people we found for you to befriend!</h3>
        <button onClick={props.obtainResponses}>Load More Friends</button>
        <br></br><br></br>
      </>
    );
  }
}

export default ResultsPrompt;