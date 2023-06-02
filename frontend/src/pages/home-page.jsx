import {useEffect} from 'react'

function Home() {

    useEffect(() => {
        document.title = "FrieMacS"
      }, []);

    return (
        <div className="home">
            <h2>FriEMaCS: A 35L Friend Matching Survey</h2> 
            <h3>Friends for Engineers, Mathematicians, and Computer Scientists.</h3>
            <h4>(Because we all know we need it.)</h4>
        </div>
    )
}

export default Home