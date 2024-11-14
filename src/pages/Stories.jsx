import React from 'react';
import '../Stories.css';


const storiesData = [
  { id: 1, name: "Alice", image: "../jeancy.jpg" },
  { id: 2, name: "Bob", image: "../product2.jpg" },
  { id: 3, name: "Carol", image: "../user.png" },
  { id: 4, name: "Dave", image: "../user.png" },
  { id: 5, name: "Eve", image: "../user.png" },
  // Add more story data here
];

const Stories = () => {
  return (
    <>
          <div className="memories-title">
        <span className='memory'>Memories</span>
      </div>
  
    <div className="stories">
     <div className="create-memory">
      <div className="add_story">
        +
      </div>
     </div>
      {storiesData.map((story) => (
        <div key={story.id} className="story">
          <img src={story.image} alt={story.name} className="story-image" />
          <p className="story-name">{story.name}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Stories;
