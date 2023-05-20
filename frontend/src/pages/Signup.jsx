import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform signup logic here with email and password
    // For this example, we'll simply log the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div>
                <label>Reenter Password:</label>
                
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
  );
};

export default SignupPage;
