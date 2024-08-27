import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-around items-center bg-slate-400 p-5">
        <div className="font-bold text-xl">Nike</div>
        <div className="flex space-x-5">
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
      </nav>
    </div>
  );
}

export default Navbar;
