import React, { useState } from 'react';
import "../styles/FeedBar.css";
import { useNavigate } from 'react-router-dom';

function SettingBar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Setting");


  const handleNavigation = (page, path) => {
    setCurrentPage(page);
    navigate(path);
  };

  return (
    <div className="feed-bar">
      <div 
        onClick={() => handleNavigation("Setting", "/settings")}
        className={currentPage === "Setting" ? "active" : ""}
      >
        Settings
      </div>
      <div 
        onClick={() => handleNavigation("Stats", "/outils")}
        className={currentPage === "Stats" ? "active" : ""}
      >
        Stats
      </div>
      <div 
        onClick={() => handleNavigation("Monetize", "/monetize")}
        className={currentPage === "Monetize" ? "active" : ""}
      >
      Monetize
      </div>
      <div 
        onClick={() => handleNavigation("Status", "/status")}
        className={currentPage === "Status" ? "active" : ""}
      >
      Status
      </div>
      <div 
        onClick={() => handleNavigation("DashBoard", "/dash")}
        className={currentPage === "DashBoard" ? "active" : ""}
      >
        DashBoard
      </div>
    </div>
  );
}

export default SettingBar;
