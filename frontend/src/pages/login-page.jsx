import React, { useState, useEffect } from 'react';
import '../styles/Login.css'

const Login = () => {
  useEffect(() => {
    document.title = "FrieMacS - Log In"
  }, []);

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

    // Perform login logic here with email and password
    // For this example, we'll simply log the values
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div class="loginForm">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;