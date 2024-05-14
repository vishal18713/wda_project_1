import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection2.css";
function HeroSection2() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", formData);
      console.log("User signed up successfully:", response.data);
      // Reset form fields
      setFormData({
        username: "",
        password: "",
        email: "",
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="main_div">
      <video autoPlay muted loop id="myVideo">
      <source src="/videos/v1.mp4" type="video/mp4" />
      </video>

      <div className="main_div_2">
        <h1>vishal</h1>
      </div>
      <div className="main_div_1">
        <div className="main_div_1_2">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br></br>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br></br>
          <button type="submit">Sign Up</button>
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default HeroSection2;
