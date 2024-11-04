import React from 'react';
import '../Feed.css';
import Stories from './Stories';

const Feed = () => {
  return (
    <div className="feed">
      <Stories />
      <h2>Feed</h2>
      <div className="post">Post 1</div>
      <div className="post">Post 2</div>
      <div className="post">Post 3</div>
      {/* Add more posts here */}
    </div>
  );
};

export default Feed;
