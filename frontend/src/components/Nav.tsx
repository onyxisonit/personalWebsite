import {Link } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 

function Nav({currentRoute} : {currentRoute: string}) {
  const [navOpen, setNavOpen] = useState(false);
  const isContactPage = currentRoute === '/contact';

  return (
    <nav className={`${isContactPage ? 'bg-terracotaLight text-white' : 'bg-dutchWhite'}`}>

      <div className="flex items-center justify-between pt-8 px-8">
        <Link to="/" className={`text-2xl font-medium tracking-wide ${isContactPage ? 'hover:text-darkBrown' : 'hover:text-burntOrange'}`}>NYX</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className={`${isContactPage ? 'hover:text-darkBrown' : 'hover:text-burntOrange'}`}>About</Link>
          <Link to="/projects" className={`${isContactPage ? 'hover:text-darkBrown' : 'hover:text-burntOrange'}`}>Projects</Link>
          <Link to="/contact" className={`${isContactPage ? 'hover:text-darkBrown' : 'hover:text-burntOrange'}`}>Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
         <Link to="/" className="hover:text-burntOrange">Home</Link>
          <Link to="/about" className="hover:text-burntOrange">About</Link>
          <Link to="/projects" className="hover:text-burntOrange">Projects</Link>
          <Link to="/contact" className="hover:text-burntOrange">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
