import React, { useState } from "react";

import "./HeaderNewCss.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="ImageNavbrsixecontrol" src="./images/logo.png" alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="Miannavbarcssgdjn" className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Book Service</NavLink>
        </li>
        <li>
          <NavLink target="_blank" to="www.blogs.revnitro.com">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Course</NavLink>
        </li>
        <li>
          <NavLink target="_blank" to="http://forum.revnitro.com">
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink to="/Team">Team</NavLink>
        </li>
        <li>
          <NavLink target="_blank" to="http://classifieds.revnitro.com/">
            Bike Resale
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
};
