import {useEffect} from 'react'

function Results() {

    useEffect(() => {
        document.title = "FriEMaCS - Results";
      }, []);

    return (
        <div>
            <h2>FrieMacS: Results</h2> 
            <h3>(Results will go here.)</h3>
        </div>
    )
}

export default Results