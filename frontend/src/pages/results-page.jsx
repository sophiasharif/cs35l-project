import {useEffect} from 'react'
import Matches from '../components/Matches.jsx'
import { useAuthContext } from '../hooks/useAuthContext'
import {useResults} from '../hooks/useResults.js'
import ResultsPrompt from '../components/ResultsPrompt.jsx'

function Results () {
  useEffect(() => {
    document.title = "FriEMaCS - Results";
  }, []);

    // Variables
    let matchesToDisplay = 0;
    let responses = {};
    const {user} = useAuthContext();
    
    // Get all responses from Backend
    const {result, isLoading, error} = useResults();
    const obtainResponses = async (event) => {
      responses = await result();
      matchesToDisplay = matchesToDisplay + 5;
    };

      return (
          <div>
              <h2>FrieMacS: Results</h2> 
              {user && (
                <div>
                  <ResultsPrompt matchesToDisplay={matchesToDisplay} obtainResponses={obtainResponses} />
                  <Matches matchesToDisplay={matchesToDisplay} />
                </div>
              )}
              {!user && (
                  <h1>Sorry, you can't view your results unless you're logged in.</h1>
              )}
          </div>
      );  
};

export default Results