import React, { useState } from 'react';
import "../styles/FeedBar.css";
import { useNavigate } from 'react-router-dom';

function FeedBar() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("All");

  const handleNavigation = (page, path) => {
    setCurrentPage(page);
    navigate(path);
  };

  return (
    <div className="feed-bar">
      <div 
        onClick={() => handleNavigation("All", "/")}
        className={currentPage === "All" ? "active" : ""}
      >
        All
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
        onClick={() => handleNavigation("Page", "/Page")}
        className={currentPage === "Page" ? "active" : ""}
      >
        Page
      </div>
      <div 
        onClick={() => handleNavigation("Group", "/Group")}
        className={currentPage === "Group" ? "active" : ""}
      >
        Group
      </div>
    </div>
  );
}

export default FeedBar;
