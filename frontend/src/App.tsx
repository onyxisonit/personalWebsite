import { BrowserRouter as Router } from "react-router-dom";


import './App.css'
import './index.css'
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return (
    <>
    
      <Router>
        <div className="h-screen overflow-y-scroll bg-dutchWhite text-darkBrown scroll-smooth">
          <AnimatedRoutes />
        </div> 
      </Router>
    </>
  )
}

export default App
