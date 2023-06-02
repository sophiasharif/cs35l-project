import {useEffect} from 'react'
import Matches from '../components/Matches.jsx'
import { useAuthContext } from '../hooks/useAuthContext'

function Results() {
    const matchesToDisplay = 15;

    const {user} = useAuthContext(); // Usage: {user.email} or {user.token} etc.

    useEffect(() => {
        document.title = "FriEMaCS - Results";
      }, []);

    return (
        <div>
            <h2>FrieMacS: Results</h2> 
            {user && (
              <div>
                <h3>Here's {matchesToDisplay} people we found for you to befriend!</h3>
                <Matches matchesToDisplay={matchesToDisplay} />
              </div>
            )}
            {!user && (
                <h1>Sorry, you can't view your results unless you're logged in.</h1>
            )}
        </div>
    )
}

export default Results