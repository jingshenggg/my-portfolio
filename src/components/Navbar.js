import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        <div className="logo">Jing Sheng</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav id="hamburger-nav">
        <div className="logo">Jing Sheng</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#sidehustles" onClick={toggleMenu}>Side Hustles</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
