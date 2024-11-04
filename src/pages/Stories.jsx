import React from 'react';
import '../Stories.css';

const storiesData = [
  { id: 1, name: "Alice", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Bob", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Carol", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Dave", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Eve", image: "https://via.placeholder.com/100" },
  // Add more story data here
];

const Stories = () => {
  return (
    <div className="stories">
      {storiesData.map((story) => (
        <div key={story.id} className="story">
          <img src={story.image} alt={story.name} className="story-image" />
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
