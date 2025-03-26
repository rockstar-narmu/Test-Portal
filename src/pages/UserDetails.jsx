import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/userdetails.css";

const UserDetails = () => {
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      alert("Please log in first.");
      navigate("/"); 
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
  
    console.log("🚀 Sending Data:", {
      email: user.email,
      ...userData
    }); 
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/userdetails", {
        email: user.email,
        ...userData,
      });
  
      console.log("✅ API Response:", response.data);  
  
      if (response.data.success) {
        alert("User details updated successfully!");
        navigate("/landing");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("❌ Error updating user details:", error.response?.data || error);
      alert("Failed to update details.");
    }
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

export default UserDetails;
