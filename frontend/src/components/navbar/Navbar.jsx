import "./navbar.css"
import React, { useState } from 'react';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">EasyGo</span>
        <div className="navItems">
          {/* <button className="navButton">Register</button>
          <button className="navButton">Login</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar