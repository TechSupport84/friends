import React, { useState } from 'react';
import { BiBell, BiGroup, BiHomeAlt, BiVideo } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../screens/UserProfile'; // Assuming UserProfile component is already created

const NavBar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to handle profile icon click
  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="logo" onClick={() => navigate("/")} >ZedLuk</a>
        <div className="navbar-center">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <a href="#" className="nav-link"><BiHomeAlt size={30} onClick={() => navigate("/")} /></a>
      <a href="#" className="nav-link"><BiVideo size={30} onClick={() => navigate("/video")} /></a>
      <a href="#" className="nav-link"><BiGroup size={30} /></a>
      <a href="#" className="nav-link"><BiBell size={30} /></a>

      <div className="navbar-right">
        <div className="icon-container">
        
          <a href="#"><img src="../chat.png" alt="Chat" className="icon"  onClick={() => navigate("/message")}/></a>
          <a href="#"><img src="../menu.png" alt="Menu" className="icon"  onClick={() => navigate("/settings")}/></a>
          <a href="#" onClick={() => navigate("/profile")}>
            <img src="../jeancy.jpg" alt="Profile" className="icon user-profile" />
            
          </a>
          
        </div>
      </div>

      {/* Render UserProfile Modal if isModalOpen is true */}
      {isModalOpen && <UserProfile />}
    </nav>
  );
};

export default NavBar;
