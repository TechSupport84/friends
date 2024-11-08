import React, { useState } from 'react';
import "../styles/FeedBar.css";
import { useNavigate } from 'react-router-dom';

function FeedBar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigation = (page, path) => {
    setCurrentPage(page);
    navigate(path);
  };

  return (
    <div className="feed-bar">
      <div 
        onClick={() => handleNavigation("Home", "/")}
        className={currentPage === "Home" ? "active" : ""}
      >
        Home
      </div>
      <div 
        onClick={() => handleNavigation("Videos", "/video")}
        className={currentPage === "Videos" ? "active" : ""}
      >
        Videos
      </div>
      <div 
        onClick={() => handleNavigation("Direct", "/direct")}
        className={currentPage === "Direct" ? "active" : ""}
      >
        Direct
      </div>
      <div 
        onClick={() => handleNavigation("Messages", "/messages")}
        className={currentPage === "Messages" ? "active" : ""}
      >
        Messages
      </div>
      <div 
        onClick={() => handleNavigation("Notifications", "/notifications")}
        className={currentPage === "Notifications" ? "active" : ""}
      >
        Notifications
      </div>
    </div>
  );
}

export default FeedBar;
