import React, { useState } from 'react';
import '../Feed.css';
import Stories from './Stories';
import CreateFeed from '../components/CreateFeed';
import { BiCommentAdd, BiDollar, BiDotsVertical, BiLike, BiShare } from 'react-icons/bi';
import LimitedText from '../components/LimitedText';
import VideoPlayer from '../components/VideoPlayer';
import CommentPage from './CommentPage';
import FeedBar from '../components/FeedBar';
import Following from '../components/Following';
import ShareModal from '../components/ShareModal'; // Import the ShareModal component

const user = [
  { id: 1, name: "Jeancy", image: "../jeancy.jpg", Description: "Sample description text.", tme: Date.now() },
  { id: 2, name: "James", image: "../jeancy.jpg", Description: "Sample description text.", tme: Date.now() },
  { id: 3, name: "Jean", image: "../jeancy.jpg", video: "../video.webm", Description: "Sample description text.", tme: Date.now() },
  { id: 4, name: "Mpoyi", image: "../jeancy.jpg", Description: "Sample description text.", tme: Date.now() },
];

const Feed = () => {
  const [visible, setVisible] = useState(false);
  const [feedModal, setFeedModal] = useState(false);
  const [openShareModalId, setOpenShareModalId] = useState(null); // Track which post has an open share modal
  const contentLink = "https://example.com/content"; // Link for copying

  const handledModal = () => {
    setFeedModal(!feedModal);
  };

  const openShareModal = (id) => {
    setOpenShareModalId(id); // Set the ID of the post for which the share modal is open
  };

  const closeShareModal = () => {
    setOpenShareModalId(null); // Close the modal by clearing the ID
  };

  return (
    <>
      <div className="feed">
        <FeedBar />
        <div className="add-story">
          <Stories />
          <CreateFeed />
        </div>

        {user.map((user) => (
          <div className="post-all" key={user.id}>
            <div className="post">
              <div className="post-head">
                <div className="menu-dot">
                  <BiDotsVertical size={30} color="gray" onClick={handledModal} />
                </div>
                <Following />
                <img src={user.image} alt={user.name} className="user-Image" />
                <div className="user-info">
                  <h3 className="username-post">{user.name}</h3>
                  <span>World</span>
                  <p>{new Date(user.tme).toLocaleString()}</p>
                </div>
                <div className="sep-feed" />
                <div className="feed-content">
                  <LimitedText text={user.Description} limit={100} />
                </div>
              </div>

              {user.video ? (
                <VideoPlayer src={user.video} className="post-image" />
              ) : (
                <img src={user.image} alt={user.name} className="post-image" />
              )}

              <div className="sep-post" />
              <div className="post-likebar">
                <div className="like">
                  <BiLike size={25} color="gray" />
                  12k <span className="like-style">Likes</span>
                </div>
                <div className="CommentIcon" onClick={() => setVisible(!visible)}>
                  <BiCommentAdd size={25} color="gray" />
                  232 <span className="like-style">Comments</span>
                </div>
                <div className="earn-money">
                  <BiDollar size={25} color="gray" />
                  20 <span className="like-style">Won</span>
                </div>
                <div className="shared" onClick={() => openShareModal(user.id)}>
                  <BiShare size={25} color="gray" />
                  23k <span className="like-style">Shared</span>
                </div>
              </div>
            </div>

            {visible && <CommentPage />}

            {/* Only show ShareModal for the specific post with openShareModalId */}
            {openShareModalId === user.id && (
              <ShareModal content={contentLink} onClose={closeShareModal} />
            )}
          </div>
        ))}

        {feedModal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => alert("Delete")}>Delete</button>
              <button onClick={() => alert("Edit")}>Edit</button>
              <button onClick={() => alert("Report")}>Report</button>
              <button onClick={() => setFeedModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Feed;
