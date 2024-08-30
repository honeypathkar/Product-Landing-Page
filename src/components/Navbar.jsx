import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ service, product, about }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-300 p-3 w-full top-0 fixed">
        <div className="font-bold text-xl pl-8">Nike</div>
        <div className="hidden md:flex space-x-3">
          <a
            href={"#" + service}
            className="hover:bg-slate-400 rounded-full px-5 py-1"
          >
            Services
          </a>
          <a
            href={"#" + product}
            className="hover:bg-slate-400 rounded-full px-5 py-1"
          >
            Products
          </a>
          <a
            href={"#" + about}
            className="hover:bg-slate-400 rounded-full px-5 py-1"
          >
            About Us
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen === false ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden inset-0 bg-gray-300 p-5 mt-5 max-w-[200%]">
          <a
            href={"#" + product}
            className="block hover:bg-slate-400 rounded-full px-5 py-2 mb-2"
          >
            Products
          </a>
          <a
            href={"#" + service}
            className="block hover:bg-slate-400 rounded-full px-5 py-2 mb-2"
          >
            Services
          </a>
          <a
            href={"#" + about}
            className="block hover:bg-slate-400 rounded-full px-5 py-2"
          >
            About Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
