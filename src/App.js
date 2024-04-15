import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <>
      <Navbar /> {/* Move Navbar outside of Routes */}
      <Routes>
        <Route path='/' element={<Home />} /> {/* Update Route syntax */}
        
        <Route path='/About_us' element={<AboutUs/>} />
        {/* <Route path='/products' element={<Products />} /> */}
        {/* <Route path='/sign-up' element={<SignUp />} /> */}
       
      </Routes>
    </>
  );
}

export default App;
