import React from 'react';
import "../VideoPlayer.css"

const VideoPlayer = ({ src, width = "600", height = "400" }) => {
  return (
    <div>
      <video width={width} height={height} controls controlsList="nodownload">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
