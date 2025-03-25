import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import './App.css'
import './index.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      <Router>
        <div className="scroll-smooth">
          <Nav />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div> 
      </Router>
    </>
  )
}

export default App
