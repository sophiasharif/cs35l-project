import React, { useState, useEffect } from 'react';
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from '../hooks/useAuthContext'
import "../styles/Login.css";

const Signup = () => {

  useEffect(() => {
    document.title = "FrieMacS - Sign Up"
  }, []);

  const {user} = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [name, setName] = useState("");
  const {signup, isLoading, error} = useSignup();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

    const isValidPassword = password.length >= 8;
    setIsPasswordValid(isValidPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const { error: check_error } = await signup(email, password);

    if (!check_error) {
      alert("Congrats! You've successfully signed up for FrieMacS.");
    }

    console.log(check_error);

    // Perform signup logic here with email and password
    // For this example, we'll simply log the values
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name: ", name);
    
  };

  return (
    <div>
      { !user && (
        <fieldset id="login_field">
        <h1>Join FrieMacS</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                placeholder="Name"
                required 
              />
            </div>
            <div>
              <input 
                type="text" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="Email"
                required 
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Re-enter password"
                required
              />
            </div>
            {!passwordMatch && <div>Passwords do not match.</div>}
            {!isPasswordValid && <div>Password must be at least 8 characters long.</div>}
            <button disabled={!isPasswordValid || !passwordMatch || isLoading}>Sign up</button>
          {/* error from backend */}
          {error && <br></br> && <div>{error}</div>} 
          </form>
        </fieldset>
      )}
      {user && (
        <div>
          <h2>You're logged in.</h2>
          <h1>Please log out before attempting to create another account.</h1>
        </div>
      )}
    </div>
  );
};

export default Signup;
