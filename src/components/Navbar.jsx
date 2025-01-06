import React from 'react'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {user,logOut} = useAuth()

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      console.log('log out successful')
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

    const links = <>
             <li><a>Home</a></li>
             <li><a>All Artifacts</a></li>
            <li><a>Add Artifacts</a></li>
    </>
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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">History Artifacts</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? (<div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Profile Photo"
              src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><button className='btn' onClick={handleLogOut}>Log Out</button></li>
        </ul>
      </div>):(
        <Link to='/login'><button className='btn'>Sign In</button></Link>
      )
    }
    
  </div>
</div>
  )
}

export default Navbar
