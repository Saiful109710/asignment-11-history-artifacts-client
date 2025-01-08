import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logoHistory.png'

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       <img className="w-[70px]" src={logo} alt="" /> <a className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">History Artifacts</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              className="tooltip  tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile Photo" src={user?.photoURL} />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow space-y-3"
            >
              <li >
                <NavLink className="py-2" to="/myArtifacts">My Artifacts</NavLink>
              </li>
              <li>
                <NavLink className="py-2" to="/likedArtifacts">Liked Artifacts</NavLink>
              </li>
             

              <li>
                <button
                  className="bg-gradient-to-r from-sky-700 to-sky-500 text-white btn rounded-lg shadow-lg hover:opacity-90 hover:shadow-xl transition duration-300"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
