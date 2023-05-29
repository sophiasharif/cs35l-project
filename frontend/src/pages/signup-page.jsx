import React, { useState, useEffect } from 'react';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [name, setName] = useState('');

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
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform signup logic here with email and password
    // For this example, we'll simply log the values
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name: ', name);

    // Reset the form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  return (
    <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div>
                <label>Name:</label>
              <input 
                type="name" 
                value={name} 
                onChange={handleNameChange} 
                required 
              />
            </div>
            {!passwordMatch && <p>Passwords do not match.</p>}
            <button disabled={!passwordMatch}>Submit</button>
        </form>
    </div>
  );
};

export default SignupPage;
