import React, { useState, useRef } from 'react';
import Stories from './Stories';
import CreateFeed from '../components/CreateFeed';
import { BiChat, BiCommentAdd, BiDollar, BiDotsVertical, BiImageAdd, BiLike, BiMessage, BiMessageAltMinus, BiMoney, BiMoneyWithdraw, BiShare } from 'react-icons/bi';
import LimitedText from '../components/LimitedText';
import VideoPlayer from '../components/VideoPlayer';
import CommentPage from './CommentPage';
import "../styles/VideoPage.css";
import "../styles/ProfileInfo.css";
import { useNavigate } from 'react-router-dom';
import FeedBar from '../components/FeedBar';
import IconSvg from '../components/IconSvg';

const user = [
  { id: 1, name: "Jeancy", image: "../jeancy.jpg", Description: "I want you so much and need you to help me.", tme: Date.now() },
  { id: 2, name: "James", image: "../jeancy.jpg" },
  { id: 5, name: "James", video: "../video.webm", image: "../jeancy.jpg", Description: "I want you so much and need you to help me.", tme: Date.now() },
  { id: 3, name: "Mpoyi", image: "../jeancy.jpg", Description: "I want you so much and need you to help me.", tme: Date.now() },
  { id: 4, name: "James", video: "../video.webm", image: "../jeancy.jpg" },
];

const ProfileInfo = () => {
  const [visible, setVisible] = useState(false);
  const [coverFile, setCoverFile] = useState(null);
  const [coverFileType, setCoverFileType] = useState("");
  const [profileFile, setProfileFile] = useState(null);
  const [profileFileType, setProfileFileType] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [modalType, setModalType] = useState(""); // To track which image is clicked (cover or profile)

  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChangeImage = (e, type) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const fileUrl = URL.createObjectURL(selectedImage);
      const fileType = selectedImage.type.startsWith('image') ? 'image' : 'unsupported';
      
      if (type === 'cover') {
        setCoverFile(fileUrl);
        setCoverFileType(fileType);
      } else if (type === 'profile') {
        setProfileFile(fileUrl);
        setProfileFileType(fileType);
      }
    }
    setShowModal(false); // Close modal after selecting a new image
  };

  const handleIconClick = (type) => {
    setModalType(type);
    setShowModal(true); // Open modal when cover or profile icon is clicked
  };

  const handleOptionClick = (option) => {
    if (option === 'View Profile') {
      navigate('/profile'); // Example navigation to profile page
    } else if (option === 'Change Profile') {
      if (modalType === 'cover') {
        coverInputRef.current.click();
      } else {
        profileInputRef.current.click();
      }
    } else if (option === 'Delete Profile') {
      if (modalType === 'cover') {
        setCoverFile(null);
      } else {
        setProfileFile(null);
      }
    }
    setShowModal(false); // Close modal after option click
  };

  return (
    <>
      <div className="feed-user">
        <div className="cover-picture">
          {coverFile ? (
            coverFileType === "image" ? (
              <img src={coverFile} className="cover-pic" alt="Cover" />
            ) : (
              <div className="unsupported">Unsupported File</div>
            )
          ) : (
            <img src="../user.png" className="cover-pic" alt="Cover" />
          )}

          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={coverInputRef}
            onChange={(e) => handleChangeImage(e, 'cover')}
          />
          <div className="button cover-button" onClick={() => handleIconClick('cover')}>
            <BiImageAdd color="#ccc" size={30} />
          </div>

          <div className="userProfile">
            {profileFile ? (
              profileFileType === "image" ? (
                <img src={profileFile} className="userImage" alt="Profile" />
              ) : (
                <div className="unsupported">Unsupported File</div>
              )
            ) : (
              <img src="../user.png" className="userImage" alt="Profile" />
            )}
            
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={profileInputRef}
              onChange={(e) => handleChangeImage(e, 'profile')}
            />
            <div className="button profile-button" onClick={() => handleIconClick('profile')}>
              <BiImageAdd color="#ddd" size={30} />
            </div>
          </div>
        </div>

        {/* Modal for Image Options */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => handleOptionClick('View Profile')}>View Profile</button>
              <button onClick={() => handleOptionClick('Change Profile')}>Change Profile</button>
              <button onClick={() => handleOptionClick('Delete Profile')}>Delete Profile</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}

        {/* Rest of the ProfileInfo Component */}
        <div className="user-profile-id">
          <span>Jeancy Mpoyi</span>
          <div className="follow">Follow +</div>
          <div className="email">jeancympoyi@gmail.com</div>
          <span>+254 743303216</span>
          <div className="follower">
            <a href="">24k Followers</a>
          </div>
          <div className="following">
            <a href="">644 Following</a>
          </div>
          <div className="button-edit-profile">Edit Profile</div>
          <div className="money-earn">
            <a href=""> Earned <BiDollar size={30} /> </a>
          </div>
          <div className="message-Box">
            <button onClick={() => navigate("/message")}>
              <IconSvg />
            </button>
          </div>
        </div>

        <div className="scrollable-feed">
          {user.map((user) => (
            <div className="post-all" key={user.id}>
              <div className="post">
                <div className="post-head">
                  <div className="menu-dot">
                    <BiDotsVertical size={30} color="gray" />
                  </div>
                  <img src={user.image} alt={user.name} className="user-Image" />
                  <div className="user-info">
                    <h3 className="username-post">{user.name}</h3>
                    <p>{user.tme}</p>
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
                  <div className="CommentIcon">
                    <BiCommentAdd size={25} color="gray" onClick={() => setVisible(!visible)} className="commentIcon" />
                    232 <span className="like-style" onClick={() => setVisible(!visible)}>Comments</span>
                  </div>
                  <div className="earn-money">
                    <BiDollar size={25} color="gray" />
                    20 <span className="like-style">Won</span>
                  </div>
                  <div className="shared">
                    <BiShare size={25} color="gray" />
                    23k <span className="like-style">Shared</span>
                  </div>
                </div>
              </div>
              {visible && <CommentPage />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
