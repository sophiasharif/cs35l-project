import React, {useState} from 'react';

const ResultsPrompt = (props) => {
  // Props: obtainResponses, successfulMatches, maxMatches
  if (!props.successfulMatches) {
    return(
      <>
        <h3 id="results-subheader">Let's find some friends for you!</h3>
        <button onClick={props.obtainResponses}>Start Making Friends</button>
        <br></br><br></br>
      </>
    );
  }
  else if (parseInt(props.successfulMatches) >= parseInt(props.maxMatches)) {
    return(
      <>
        <h3 id="results-subheader">Friends found!  Here's {props.succesfulMatches} people we found for you to befriend:</h3>
        <h4>If you're not satisfied with your results, try adjusting your survey responses to better correlate with your core beliefs.</h4>
      </>
    );
  }
  else {
    return(
      <>
        <h3 id="results-subheader">Friends found! Here's {props.successfulMatches} people we found for you to befriend:</h3>
        <button onClick={props.obtainResponses}>Load More Friends</button>
        <br></br><br></br>
      </>
    );
  }
}

export default ResultsPrompt;