import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Bookstore</span>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="navbar-right">
        <span>Welcome, User</span>
        <FaUser className="navbar-icon" />
        <FaSignOutAlt className="navbar-icon" />
      </div>
    </nav>
  );
}
