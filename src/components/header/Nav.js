import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ className, hideMenuFn }) => {
  const navStyle = ({ isActive }) => {
    return isActive
      ? "font-extrabold text-clr tracking-wider"
      : "font-extrabold text-zinc-900 tracking-wider";
  };

  return (
    <div className={className}>
      <NavLink onClick={hideMenuFn} to={"/"} className={navStyle}>
        HOME
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/shop"} className={navStyle}>
        SHOP
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/contactwithus"} className={navStyle}>
        CONTACT
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/pages"} className={navStyle}>
        PAGES
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/blog"} className={navStyle}>
        BLOG
      </NavLink>
    </div>
  );
};

export default Nav;
