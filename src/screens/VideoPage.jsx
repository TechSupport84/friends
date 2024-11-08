import React from 'react'
import "../styles/VideoPage.css"
import LeftSidebar from '../pages/LeftSidebar';
import Feed from '../pages/Feed';
import RightSidebar  from "../pages/RightSidebar";
import "../HomePage.css"
import VideoFeed from '../pages/VideoFeed';

const VideoPage = () => {
  return (
    <div className="home-page">
      <LeftSidebar />
      <VideoFeed />
      <RightSidebar />
    </div>
  );
};

export default VideoPage;
