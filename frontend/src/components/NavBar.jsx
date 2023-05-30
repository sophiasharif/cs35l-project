import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { AuthContext } from '../context/AuthContext'
import { useAuthContext } from '../hooks/useAuthContext'

function NavBar() {
    const {logout} = useLogout() 
    const {user} = useAuthContext()

    let isAuthenticated = false;

    if (user)
    {
        isAuthenticated = true;
    }

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container" >
                <Link to='/' >
                    <h1>Home</h1>
                </Link>
                {!isAuthenticated && (
                    <Link to='/login'>
                    <h1>Login</h1>
                    </Link>
                )}
                {!isAuthenticated && (
                    <Link to='/signup'>
                    <h1>Sign Up</h1>
                    </Link>
                )}
                {isAuthenticated && (
                    <Link to='/survey'>
                        <h1>Survey</h1>
                    </Link>
                )}
                {isAuthenticated && (
                    <Link to='/results'>
                        <h1>Results</h1>
                    </Link>
                )}
                {isAuthenticated && (
                    <Link onClick={handleClick}>
                        <h1>Logout</h1>
                    </Link>
                )}
            </div>
        </header>
    )
}

export default NavBar