import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react'

import './App.css'
import './index.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    <>
    
      <Router>
        <div className="App scroll-smooth">
          <Nav />
          <AnimatedRoutes />
          <Footer />
        </div> 
      </Router>
    </>
  )
}

export default App
