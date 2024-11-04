import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar  from "./RightSidebar";
import "../HomePage.css"

const HomePage = () => {
  return (
    <div className="home-page">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
};

export default HomePage;


