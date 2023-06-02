import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Matches.css';

function ResultsPrompt (props) {
  // Props: obtainResponses, matchesToDisplay

  if (!props.matchesToDisplay) {
    return(
      <>
        <h3>Let's find {props.matchesToDisplay} friends for you</h3>
        <button onClick={props.obtainResponses}>Start Making Friends</button>
      </>
    );
  }
  else {
    return(
      <>
        <h3>Here's {props.matchesToDisplay} people we found for you to befriend!</h3>
        <button onClick={props.obtainResponses}>Start Making Friends</button>
      </>
    );
  }
}

export default ResultsPrompt;