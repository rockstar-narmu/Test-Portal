import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/signUpPage.css";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", { 
        email, 
        password 
      });
      alert(response.data.message);
      navigate("/userdetails"); // Redirect after signup
    } catch (error) {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="signUpPage">
      <div className="left-side">
        <div className="welcome">Welcome to Test Portal</div>
        <div className="started">Let's get started!</div>
      </div>

      <div className="right-side">
        <div className="sign-up-title">Sign Up</div>

        <form className="inputs-container" onSubmit={handleSignUp}>
          <div className="email-container">
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="password-container">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="confirm-password-container">
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div className="submit-button-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>

        <div className="log-in-container">
          Already have an account? <Link to="/" className="log-in">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
