import React, { useState, useRef } from 'react';
import "../CreateFeed.css";
import { BiImageAdd, BiVideo, BiVideoRecording } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import CustomButton from '../components/Button';
import ButtonDisabled from './ButtonDisable';

function CreateFeed() {
  const [username] = useState("Jeancy");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setFile(null);
    setPreviewUrl(null);
  };

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPopupPosition({
      top: rect.top + window.scrollY + 20, // Adjust for popup position
      left: rect.left + window.scrollX,
    });
    setIsPopupVisible(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Create a preview URL
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const clearPreview = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div>
      <div className="container-feed">
        <div className="input-feed">
          <div className="profiles">
            <img src="../jeancy.jpg" alt="user" className="user-profile" width="40px" />
          </div>
          <div className="create-feed" onClick={handleClick}>
            {`What's Up ${username}?`}
          </div>
        </div>
        <div className="sep-feed" />
        <div className="file-feed" onClick={handleClick}>
          <BiVideo size={30} color="gray" />
          <BiImageAdd size={30} color="gray" />
          <BiVideoRecording size={30} color="gray" />
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup-window" style={{ top: popupPosition.top, left: popupPosition.left }}>
          <button onClick={handlePopupClose} className="close-button">
            <AiOutlineClose size={30} />
          </button>

          <h2>Create</h2>
          <div className="sep-line-popup" />
          <form method="POST" encType="multipart/form-data">
            <div className="profile-info-popup">
              <div className="profiles-popup">
                <img src="../jeancy.jpg" alt="user" className="user-profile-popup" width="40px" />
                <div className="user-details-popup">
                  <div className="user-id">{username}</div>
                  <span>World</span>
                </div>
              </div>
            </div>

            {/* File Upload and Preview */}
            {previewUrl && (
              <div className="file-preview">
                <button className="clear-preview" onClick={clearPreview}>
                  <AiOutlineClose size={20} />
                </button>
                {file.type.startsWith('image') ? (
                  <img src={previewUrl} alt="Preview" className="preview-image" />
                ) : (
                  <video src={previewUrl} controls className="preview-video" />
                )}
              </div>
            )}

            <input
              type="file"
              accept="image/*, video/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            <div className="border-form">
              <textarea
                placeholder="What's on your mind?"
                className="create-input"
                onFocus={() => setIsButtonVisible(true)}
                onBlur={() => setIsButtonVisible(false)}
              />
              <div className="sep-line-popup" />
              <div className="files-upload" onClick={handleIconClick}>
                <BiImageAdd size={30} color="gray" />
                <BiVideo size={30} color="gray" />
                <BiVideoRecording size={30} color="gray" />
              </div>
            </div>

            {isButtonVisible ? (
              <CustomButton text="Publish" onClick={() => {}} />
            ) : (
              <ButtonDisabled text="Publish" onClick={() => {}} />
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateFeed;
