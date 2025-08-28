// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Finance Manager</Link>
      </div>

      {/* Desktop Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
        <li><Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link></li>
        <li><Link to="/budget" onClick={() => setIsOpen(false)}>Budget</Link></li>
        <li><Link to="/goals" onClick={() => setIsOpen(false)}>Goals</Link></li>
        <li><Link to="/tools" onClick={() => setIsOpen(false)}>Tools</Link></li>
        <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
