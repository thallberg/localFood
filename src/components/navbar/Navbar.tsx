import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between h-14 bg-gray-200 relative">
      <div className="flex items-center gap-2 ml-6">
        <img
          className="w-10 h-10"
          src="/navbar/trees.png"
          alt="Ikon som visar tre träd"
        />
        <p>Skol Projekt</p>
      </div>

      <div className="lg:flex lg:items-center mr-6 hidden">
        <ul className="flex gap-4 text-lg">
          <li>
            {" "}
            <Link to="/">Hem</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">Om Oss</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Kontakta</Link>{" "}
          </li>
        </ul>
      </div>

      <div
       onClick={handleClick}
        className="mr-4 text-4xl cursor-pointer flex items-center lg:hidden"
      >
        {menuOpen ? 
         <HiX
        
         /> : 
         <HiMenu
        
          />}
      </div>

      {menuOpen && (
        <div className="absolute top-14 left-0 w-full h-screen bg-gray-900 opacity-98 z-10 text-white">
          <ul 
          className="flex flex-col items-center gap-22 text-5xl h-full py-22"
          onClick={handleClick}
          >
            <li>
              {" "}
              <Link to="/">Hem</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">Om Oss</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Kontakta</Link>{" "}
            </li>
          </ul>
        </div>
      )}

   
    </nav>
  );
};

export default Navbar;
