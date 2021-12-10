import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">Logo</div>
        <div className="links-container show-container">
          <ul className="socoial-icons"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
