import React from 'react';
import LeftSidebar from '../pages/LeftSidebar';
import Feed from '../pages/Feed';
import RightSidebar  from "../pages/RightSidebar";
import "../HomePage.css"
import ProfileInfo from '../pages/ProfileInfo';

const UserProfile = () => {
  return (
    <div className="home-page">
      <LeftSidebar />
      <ProfileInfo />
      <RightSidebar />
    </div>
  );
};

export default UserProfile;


