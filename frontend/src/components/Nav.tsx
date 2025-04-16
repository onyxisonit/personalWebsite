import {Link} from "react-router-dom";

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full h-16 bg-plum text-white font-display shadow-md z-10">
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">NYX</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-terracota">Home</Link>
          <Link to="/about" className="hover:text-terracota">About</Link>
          <Link to="/projects" className="hover:text-terracota">Projects</Link>
          <Link to="/contact" className="hover:text-terracota">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
         <Link to="/" className="hover:text-terracota">Home</Link>
          <Link to="/about" className="hover:text-terracota">About</Link>
          <Link to="/projects" className="hover:text-terracota">Projects</Link>
          <Link to="/contact" className="hover:text-terracota">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
