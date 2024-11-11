// ShareModal.js
import React from 'react';
import "../styles/ShareModal.css"; // Add your styling here

const ShareModal = ({ onClose, content }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="share-modal">
      <div className="modal-content">
        <h2>Share This Content</h2>
        <button onClick={copyToClipboard}>Copy Link</button>
        <button onClick={() => alert("Share with friends in-app!")}>Share with Friends</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ShareModal;
