import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResetPassword.css";


const ResetPassword = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Navigate=useNavigate();
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };
  const handleLoginRedirect=()=>{
    Navigate("/");
  }

  return (
    <div className="reset-container">

      <div className="left-panel">
        <h2>Reset Password</h2>
      </div>

      <div className="right-panel">
        <h3>Enter OTP & Set New Password</h3>

      
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength="1"
              className="otp-input"
            />
          ))}
        </div>

    
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
        />

      
        <div className="button-container">
          <button className="btn primary"  onClick={handleLoginRedirect}>Continue</button>
          <button className="btn secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;