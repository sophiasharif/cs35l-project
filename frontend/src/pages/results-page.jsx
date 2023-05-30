import {useEffect} from 'react'
import Matches from '../components/Matches.jsx'
import { useAuthContext } from '../hooks/useAuthContext'

function Results() {

    const {user} = useAuthContext();

    useEffect(() => {
        document.title = "FriEMaCS - Results";
      }, []);

    return (
        <div>
            <h2>FrieMacS: Results</h2> 
            {user && (
                <div>
                    <h3>(Results will go here.)</h3>
                    <Matches />
                </div>
            )}
            {!user && (
                <h1>Sorry, you can't view your results unless you're logged in.</h1>
            )}
            
        </div>
    )
}

export default Results