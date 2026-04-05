import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { role, setRole } = useContext(AppContext);

  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <Link to="/">Finance Manager</Link>
      </div>

      
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
        <li><Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link></li>
        <li><Link to="/budget" onClick={() => setIsOpen(false)}>Budget</Link></li>
        <li><Link to="/goals" onClick={() => setIsOpen(false)}>Goals</Link></li>
        <li><Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link></li>

      
        <li>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: "5px", borderRadius: "5px" }}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </li>
      </ul>

    
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}