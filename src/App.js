import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Navbar from './components/Navbar'; 
import SignUp from './components/pages/SignUp';
import Chat from './components/pages/Chat';

function App() {
  return (
    <>
      <Navbar /> {/* Move Navbar outside of Routes */}
      <Routes>
        <Route path='/' element={<Home />} /> {/* Update Route syntax */}
        <Route path='/About_us' element={<AboutUs/>} />
        <Route path='/Contact_us' element={<ContactUs/>} />
        <Route path='/chat' element={<Chat/>} />

        {/* <Route path='/products' element={<Products />} /> */}
        <Route path='/sign-up' element={<SignUp />} />
       
      </Routes>
    </>
  );
}

export default App;
