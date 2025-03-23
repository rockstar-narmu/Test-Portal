import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password123") {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-page">
      {/* Left Section - Branding */}
      <div className="left-section">
        <h1>AI Testportal</h1>
        <p>Test your Skills with us</p>
      </div>

      {/* Right Section - Login Form */}
      <div className="right-section">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" id="Login">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <div className="links">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/signup">Don't have an account? Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
