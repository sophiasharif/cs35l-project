import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(email, password)

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
      <h1>Login Page</h1>
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
        <button type="submit" disabled={isLoading}>Login</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
