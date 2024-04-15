import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Update import
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <>
      <Navbar /> {/* Move Navbar outside of Routes */}
      <Routes>
        <Route path='/' element={<Home />} /> {/* Update Route syntax */}
        {/* 
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        */}
      </Routes>
    </>
  );
}

export default App;
