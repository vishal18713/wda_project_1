import React from 'react';
import './HeroSection.css';
import { CgChanel } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';



function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };
  return (
    <div className='hero-container-1'>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/v2.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Mental Health <CgChanel className="hero-icon"  color='black'/></h1>
       
        <p>Click here to Login</p>
        <button className="hero-button" onClick={handleClick}>Click Here to Login</button>
      </div>
    </div>
  );
}

export default HeroSection;
