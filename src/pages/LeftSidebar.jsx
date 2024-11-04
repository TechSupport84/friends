import React from 'react';
import '../LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>Profile</li>
        <li>My Network</li>
        <li>Jobs</li>
        <li>Messaging</li>
        <li>Notifications</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
