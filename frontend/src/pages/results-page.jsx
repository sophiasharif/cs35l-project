import {useEffect} from 'react'
import Matches from '../components/Matches.jsx'

function Results() {
    const matchesToDisplay = 15;

    useEffect(() => {
        document.title = "FriEMaCS - Results";
      }, []);

    return (
        <div>
            <h2>FrieMacS: Results</h2> 
            <h3>Here's {matchesToDisplay} people we found for you to befriend!</h3>
            <Matches matchesToDisplay={matchesToDisplay} />
        </div>
    )
}

export default Results