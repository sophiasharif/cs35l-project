import React, { useState, useEffect } from 'react';
import { useLogin } from "../hooks/useLogin";
import "../styles/Login.css"
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {
  useEffect(() => {
    document.title = "FrieMacS - Log In"
  }, []);

  const {user} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(email, password);

    // Perform login logic here with email and password
    // For this example, we'll simply log the values
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {!user && (
        <fieldset id="login_field">
          <h1>Welcome back!</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" value={email} onChange={handleEmailChange} placeholder="Email" required />
            </div>
            <div>
              <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
            </div>
            <button type="submit" disabled={isLoading}>Login</button>
            {error && <div>{error}</div>}
          </form>
          <a id="signup_redirect" href="/signup">Don't have an account? Sign up here!</a>
        </fieldset>
      )}
      {user && (
        <div>
          <h2>You're logged in.</h2>
          <h1>Please log out before attempting to login to another account.</h1>
        </div>
      )}
    </div>
  )
}

export default Login;
