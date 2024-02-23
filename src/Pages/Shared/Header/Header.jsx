import React, { useContext } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then()
        .catch();
}

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar h-28 my-12  px-32 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-semibold rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img className="header-logo" src={logo} alt="" />
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
