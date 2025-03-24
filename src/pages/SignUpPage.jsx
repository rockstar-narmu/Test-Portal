import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signUpPage.css";

export const SignUpPage = () => {
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSignUp = () => {
    // Perform validation here if needed
    navigate("/landing"); // Redirect to Landing Page
  };

  return (
    <div className='signUpPage'>
      <div className='left-side'>
        <div className='welcome'>Welcome to our AI Test Portal</div>
        <div className='started'>Let's get started!</div>
      </div>

      <div className='right-side'>
        <div className='sign-up-title'>Sign Up</div>

        <div className='inputs-container'>
          <div className='email-container'>
            <div className='mail-icon'>
              <img src="/assets/icons/email.png" height={40} width={40} alt='email-icon' />
            </div>
            <input type='email' placeholder='Email Address' />
          </div>
          <div className='password-container'>
            <div className='password-icon'>
              <img src="/assets/icons/locked.png" height={40} width={40} alt='password-icon' />
            </div>
            <input type='password' placeholder='Password' />
          </div>
          <div className='confirm-password-container'>
            <div className='confirm-password-icon'>
              <img src="/assets/icons/password.png" height={40} width={40} alt='confirm-password-icon' />
            </div>
            <input type='password' placeholder='Confirm Password' />
          </div>
        </div>

        <div className='submit-button-container'>
          <button type="submit" onClick={handleSignUp}>Sign Up</button>
        </div>

        <div className='log-in-container'>
          Already have an account? <span className='log-in'>Log in</span>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
