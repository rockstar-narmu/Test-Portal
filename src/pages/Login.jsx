import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Login.css";

export const LoginPage = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    console.log("Logging in..."); 
    navigate("/");
  };

  const handleSignUpRedirect = () => {
    console.log("Navigating to Sign Up"); 
    navigate("/signup"); 
  };

  const handleForgotPassword = () => {
    console.log("Navigating to Forgot Password"); 
    navigate("/reset-password"); 
  };

  return (
    <div className="loginPage">
      <div className="left-side">
        <div className="welcome">Welcome to our AI Test Portal</div>
        <div className="started">Let's get started!</div>
      </div>

      <div className="right-side">
        <div className="login-title">Log In</div>

        <div className="inputs-container">
          <div className="email-container">
            <div className="mail-icon">
              <img src="/assets/icons/email.png" height={40} width={40} alt="email-icon" />
            </div>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="password-container">
            <div className="password-icon">
              <img src="/assets/icons/locked.png" height={40} width={40} alt="password-icon" />
            </div>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="forgot-password-container">
          <span className="forgot-password" onClick={handleForgotPassword} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
            Forgot Password?
          </span>
        </div>

        <div className="submit-button-container">
          <button type="submit" onClick={handleLogin}>Log In</button>
        </div>

        <div className="sign-up-container">
          Don't have an account?{" "}
          <span className="sign-up" onClick={handleSignUpRedirect} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;