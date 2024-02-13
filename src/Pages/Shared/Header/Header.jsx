import React from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li to="">
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar h-28 my-12  px-32 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-semibold rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden font-semibold lg:flex">
        <ul className="menu menu-horizontal  px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline">Appointment</Link>
      </div>
    </div>
  );
};

export default Header;
