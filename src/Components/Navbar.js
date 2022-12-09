import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar(){
  return (
    <nav>
      <NavLink to="/signup" className="read">
        <button class="btn">click here to navigate signup page </button>
      </NavLink>
      <h1>Welcome Home! Let's hear your reviews 💑</h1>
    </nav>
  );
} 

export default Navbar;