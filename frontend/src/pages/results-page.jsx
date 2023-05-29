import {useEffect} from 'react'
import Matches from '../components/Matches.jsx'

function Results() {

    useEffect(() => {
        document.title = "FriEMaCS - Results";
      }, []);

    return (
        <div>
            <h2>FrieMacS: Results</h2> 
            <h3>(Results will go here.)</h3>
            <Matches />
        </div>
    )
}

export default Results