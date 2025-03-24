import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/userdetails.css";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    profession: "",
    contact: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("User Details Submitted:", userData);
    // alert("User details saved successfully!");
    // navigate("/home");
  };

  return (
    <div className="user-details-container">
      <h2 className="user-details-title">Complete Your Profile</h2>
      <form className="user-details-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={userData.name}
          onChange={handleChange}
          className="user-input"
          required
        />
        <input
          type="text"
          name="profession"
          placeholder="Enter your profession"
          value={userData.profession}
          onChange={handleChange}
          className="user-input"
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Enter your contact number"
          value={userData.contact}
          onChange={handleChange}
          className="user-input"
          required
        />
        <button type="submit" className="user-submit-btn">Save Details</button>
      </form>
    </div>
  );
};

export default Dashboard;
