import React, {useEffect, useState} from 'react'
import Matches from '../components/Matches.jsx'
import { useAuthContext } from '../hooks/useAuthContext'
import {useResults} from '../hooks/useResults.js'
import ResultsPrompt from '../components/ResultsPrompt.jsx'

function Results () {
  useEffect(() => {
    document.title = "FriEMaCS - Results";
  }, []);

    // Variables
    const [matchesToDisplay, setMatchesToDisplay] = useState(0);
    const [responses, setResponses] = useState({});
    const {user} = useAuthContext();
    const matchIncrement = 3;
    const maxMatches = matchIncrement*4;
    
    // Get all responses from Backend
    const {result, isLoading, error} = useResults();
    const obtainResponses = async (event) => {
      const temp = await result();
      setResponses(temp);
      setMatchesToDisplay(matchesToDisplay + matchIncrement);
    };

      return (
          <div>
              <h2>FrieMacS: Results</h2> 
              {user && (
                <div>
                  <ResultsPrompt matchesToDisplay={matchesToDisplay} obtainResponses={obtainResponses} maxMatches={maxMatches} />
                  <Matches matchesToDisplay={matchesToDisplay} responses={responses} />
                </div>
              )}
              {!user && (
                  <h1>Sorry, you can't view your results unless you're logged in.</h1>
              )}
          </div>
      );  
};

export default Results