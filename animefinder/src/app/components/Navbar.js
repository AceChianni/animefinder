// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/quiz">Quiz</Link>
    <Link to="/recommendations">Recommendations</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/waifu">Waifu</Link>
  </nav>
);

export default Navbar;
