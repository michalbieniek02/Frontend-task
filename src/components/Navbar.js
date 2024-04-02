import React, { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/companyLogo.png";
import burgerIcon from "../assets/burger.png";
import closeIcon from "../assets/closeIcon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-navdark-200">
      <div className="flex items-center justify-between px-4 py-4">
        <img src={companyLogo} alt="Company Logo" className="ml-28 h-6" />
        <button className="block lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <img src={closeIcon} alt="Close Menu" className="h-6" />
          ) : (
            <img src={burgerIcon} alt="Burger Menu" className="h-6" />
          )}
        </button>
        <nav className="hidden lg:flex text-gray-300">
          <Link to="/" className="hover:text-gray-400 px-3 py-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 px-3 py-2">
            About Us
          </Link>
          <button class=" border border-gray-400 bg-transparent px-4 py-2 text-center text-base rounded-full transition duration-300 ease-in-out hover:bg-navdark-100 ml-20 mr-20">
            Contact us
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex lg:hidden">
          <div className="bg-navdark-200 h-screen w-screen p-4">
            <header className="flex justify-between">
              <img src={companyLogo} alt="Company Logo" className="h-6"></img>
              <button className="block" onClick={toggleMenu}>
                <img
                  src={closeIcon}
                  alt="Close Menu"
                  className="h-5 float-right"
                />
              </button>
            </header>

            <nav className="mt-8 text-gray-300">
              <Link
                to="/"
                className="block py-2  hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2  hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <button class="border border-gray-400 bg-transparent mt-6 px-8 py-3 text-center text-base rounded-full transition duration-300 ease-in-out hover:bg-navdark-100 ">
                Contact us
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
