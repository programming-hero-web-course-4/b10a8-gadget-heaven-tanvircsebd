import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar bg-purple-600 text-white px-6 sticky top-0 z-10">
      <div className="flex-1">
        <a className="text-2xl font-bold">Gadget Heaven</a>
      </div>
      <div className="flex-none flex items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a>Statistics</a>
          </li>
          <li>
            <a>
              <NavLink to="/gadgetsCart">Cart</NavLink>
            </a>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
        {/* Right Corner Icons */}
        <div className="flex items-center gap-4 mr-2">
          <button className="btn btn-circle btn-ghost">
            <FaShoppingCart />
          </button>
          <button className="btn btn-circle btn-ghost">
            <GiSelfLove />
          </button>
          {/* <button className="btn btn-circle btn-ghost">
            <i className="fas fa-user"></i> 
          </button>
          <button className="btn btn-circle btn-ghost">
            <i className="fas fa-bell"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
