import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './compoent/Navbar/Navbar';
import Home from './compoent/Home/Home'
import About from './compoent/About/About';
import Gallery from './compoent/Gallery/Gallery'
import Desnigation from './compoent/Desnigation/Desnigation'
import Blogs from './compoent/Blogs/Blogs'
import Contact from './compoent/Contact/Contact'
import Signup from './compoent/Signup/Signup';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery/>} />
            <Route path="Desnigation" element={<Desnigation/>} />
            <Route path="Blogs" element={<Blogs/>} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
