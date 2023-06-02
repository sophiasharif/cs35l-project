import React, {useState} from 'react';

const ResultsPrompt = (props) => {
  // Props: obtainResponses, matchesToDisplay

  if (!props.matchesToDisplay) {
    return(
      <>
        <h3>Let's find some friends for you</h3>
        <button onClick={props.obtainResponses}>Start Making Friends</button>
      </>
    );
  }
  else {
    return(
      <>
        <h3>Here's {props.matchesToDisplay} people we found for you to befriend!</h3>
        <button onClick={props.obtainResponses}>Load More Friends</button>
      </>
    );
  }
}

export default ResultsPrompt;