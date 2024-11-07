import React, { useState } from 'react';

const LimitedText = ({ text = "", limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine if text exceeds the limit
  const isTextLong = text && text.length > limit;

  return (
    <div>
      {/* Display limited text or full text based on state */}
      <p>
        {isExpanded ? text : `${text.slice(0, limit)}${isTextLong ? '...' : ''}`}
      </p>
      
      {/* Show 'See more' button if text is long and not expanded */}
      {isTextLong && (
        <a href='#' onClick={toggleExpanded} style={{textAlign:"center",textDecoration:'none'}}>
          {isExpanded ? 'See less' : 'See more'}
        </a>
      )}
    </div>
  );
};

export default LimitedText;
