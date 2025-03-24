import React, { useState } from "react";
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="reset-container">
      <div className="left-panel">
        <h2>Reset password</h2>
      </div>
      <div className="right-panel">
        <h3>New Password</h3>
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
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
        />
        <div className="button-container">
          <button className="btn primary">Continue</button>
          <button className="btn secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
