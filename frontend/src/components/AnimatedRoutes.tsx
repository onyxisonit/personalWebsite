import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import AnimatedOverlay from "./AnimatedOverlay";
import Fade from "./Fade"

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AnimatedRoutes() {
    const location = useLocation();

    const [displayedPath, setDisplayedPath] = useState(location.pathname);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (location.pathname !== displayedPath) {
            setShowOverlay(true);
      
      const timeout = setTimeout(() => {
        setDisplayedPath(location.pathname);
        setShowOverlay(false);
      }, 1000); 
      return () => clearTimeout(timeout);
    }
    }, [location.pathname, displayedPath]);
  
    return (
        <>

            <AnimatePresence mode="wait">
                {showOverlay && <AnimatedOverlay key={location.pathname + "-overlay"} />}
            </AnimatePresence>  

            <AnimatePresence mode="wait">  
                <Routes location={{ ...location, pathname: displayedPath }} key={displayedPath}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default AnimatedRoutes