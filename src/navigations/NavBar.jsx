import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo">MyApp</a>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className={`navbar-right ${isMobileMenuOpen ? 'show' : ''}`}>
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Network</a>
        <a href="#" className="nav-link">Jobs</a>
        <a href="#" className="nav-link">Messages</a>
        
        <div className="icon-container">
          <a href="#"><img src="notification-icon.png" alt="Notifications" className="icon" /></a>
          <a href="#"><img src="profile-icon.png" alt="Profile" className="icon" /></a>
        </div>
      </div>

      <button className="menu-toggle" onClick={toggleMobileMenu}>☰</button>
    </nav>
  );
};

export default NavBar;
