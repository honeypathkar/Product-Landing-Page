import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-around items-center bg-gray-400 p-3 w-full top-0 fixed">
        <div className="font-bold text-xl">Nike</div>
        <div className="hidden md:flex space-x-3">
          <a href="/" className="hover:bg-slate-500 rounded-full px-5 py-1">
            Products
          </a>
          <a href="/" className="hover:bg-slate-500 rounded-full px-5 py-1">
            Services
          </a>
          <a href="/" className="hover:bg-slate-500 rounded-full px-5 py-1">
            About Us
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-400 p-5">
          <a
            href="/"
            className="block hover:bg-slate-500 rounded-full px-5 py-2 mb-2"
          >
            Products
          </a>
          <a
            href="/"
            className="block hover:bg-slate-500 rounded-full px-5 py-2 mb-2"
          >
            Services
          </a>
          <a
            href="/"
            className="block hover:bg-slate-500 rounded-full px-5 py-2"
          >
            About Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
