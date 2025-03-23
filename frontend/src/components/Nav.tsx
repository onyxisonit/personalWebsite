// import {Link} from "react-router-dom";

// function Nav() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/projects">Projects</Link></li>
//             </ul>
//         </nav>
//     );
// }
// export default Nav;

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Nyx</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
