import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/About">About</NavLink>
    </>
  );
}

export default Nav;
