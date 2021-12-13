import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          Logo
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <div className="links">
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Product</a>
            </li>
          </div>
          <ul className="social-icons">
            <li>
              <a href="http://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
