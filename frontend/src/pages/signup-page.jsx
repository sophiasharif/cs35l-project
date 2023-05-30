import React, { useState, useEffect } from 'react';
import { useSignup } from "../hooks/useSignup";
import "../styles/Login.css";

const Signup = () => {

  useEffect(() => {
    document.title = "FrieMacS - Sign Up"
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [name, setName] = useState("");
  const {signup, error, isLoading} = useSignup();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

    await signup(email, password)

    // Perform signup logic here with email and password
    // For this example, we'll simply log the values
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name: ", name);

    // Reset the form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  return (
    <div>
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
                type="text"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Re-enter password"
                required
              />
            </div>
            {!passwordMatch && <p>Passwords do not match.</p>}
            <button disabled={!passwordMatch || isLoading}>Sign up</button>
        {/* error from backend */}
        {error && <div>{error}</div> } 
        </form>
      </fieldset>
    </div>
  );
};

export default Signup;
