import { useEffect } from 'react'
import Form from '../components/Form'
import { useAuthContext } from '../hooks/useAuthContext'

function Survey () {

    const {user} = useAuthContext();

    useEffect(() => {
        document.title = "FriEMaCS - Survey"
      }, []);

    return( 
        <div>
            <h2>FriEMaCS: A 35L Friend Matching Survey</h2> 
            {user && (
                <Form/> 
            )}
            {!user && (
                <h1>Sorry, you can't fill out the survey unless you're logged in.</h1>
            )}
        </div>
    );
}

export default Survey
