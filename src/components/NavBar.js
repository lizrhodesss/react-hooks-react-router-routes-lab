import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <NavLink 
    to="/">
    </NavLink>
    <NavLink 
      to="movies">
    </NavLink>
    <NavLink 
      to="directors">
    </NavLink>
    <NavLink 
      to="actors">
    </NavLink>
  </div>
  )
}

export default NavBar;
