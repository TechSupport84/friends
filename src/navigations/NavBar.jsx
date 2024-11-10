import React, { useState } from 'react';
import { BiBell, BiHomeAlt, BiVideo } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(null);

  const handleNavigation = (path, icon) => {
    navigate(path);
    setActiveIcon(icon);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo" onClick={() => handleNavigation("/", "home")}>
          ZedLuk
        </a>
        <div className="navbar-center">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <a href="#" className={`nav-link ${activeIcon === "home" ? "active" : ""}`}>
        <BiHomeAlt size={30} onClick={() => handleNavigation("/", "home")} />
      </a>
      <a href="#" className={`nav-link ${activeIcon === "video" ? "active" : ""}`}>
        <BiVideo size={30} onClick={() => handleNavigation("/video", "video")} />
      </a>
      <a href="#" className={`nav-link ${activeIcon === "bell" ? "active" : ""}`}>
        <BiBell size={30} onClick={() => handleNavigation("/notifications", "bell")} />
      </a>

      <div className="navbar-right">
        
        <div className="icon-container">
          <a href="#" className={`nav-link ${activeIcon === "message" ? "active" : ""}`}>
            <img
              src="../chat.png"
              alt="Chat"
              className="icon"
              onClick={() => handleNavigation("/message", "message")}
            />
          </a>
          <a href="#" className={`nav-link ${activeIcon === "settings" ? "active" : ""}`}>
            <img
              src="../menu.png"
              alt="Menu"
              className="icon"
              onClick={() => handleNavigation("/settings", "settings")}
            />
          </a>
          <a
            href="#"
            className={`nav-link ${activeIcon === "profile" ? "active" : ""}`}
            onClick={() => handleNavigation("/profile", "profile")}
          >
            <img src="../jeancy.jpg" alt="Profile" className="icon user-profile" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
