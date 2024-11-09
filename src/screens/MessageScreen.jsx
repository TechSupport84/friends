import React, { useState } from 'react';
import CustomButton from '../components/Button';
import "../styles/MessageScreen.css";
import ButtonDisabled from '../components/ButtonDisable';

function MessageScreen() {
  const [isPressed, setIsPressed] = useState(false);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(''); // To determine if it's an image or video

  // Handle file selection (image or video)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileType(selectedFile.type.startsWith('image') ? 'image' : 'video');
    }
  };

  // Handle sending the message and file
  const handleSend = () => {
    console.log('Message:', message);
    console.log('File:', file);

    // Reset state after sending
    setMessage('');
    setFile(null);
    setFileType('');
  };

  return (
    <div className="message-screen">
      <div className="message-head">Messages</div>
      <div className="message-box">
        <div className="scrollable-box">
          {/* Display each message */}
          <p>
            <span className="online-indicator"></span> User1: Hello!
          </p>
          <p>
            <span className="online-indicator"></span> User2: Hi there!
          </p>
          <p>
            <span className="online-indicator"></span> User1: How are you?
          </p>
          <p>
            <span className="online-indicator"></span> User1: How are you?
          </p>
          <p>
            <span className="online-indicator"></span> User2: I’m good, thanks for asking!
          </p>
          <p>
            <span className="online-indicator"></span> User1: Glad to hear that!
          </p>
          <p>
            <span className="online-indicator"></span> User2: How about you?
          </p>
        </div>
      </div>

      <div className="message-input-box">
        <form method="post">
          {/* Container for the textarea and attach button */}
          <div className="textarea-container">
            <textarea
              type="text"
              placeholder="Message"
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setIsPressed(true)}
              onBlur={() => setIsPressed(false)}
            />
            {/* Attach button */}
            <label htmlFor="file-input" className="attach-button">
              Attach
            </label>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-input"
            />
          </div>

          {/* Show image/video preview */}
          {file && (
            <div className="file-preview">
              {fileType === 'image' ? (
                <img src={file} alt="Preview" className="file-preview-image" />
              ) : (
                <video controls className="file-preview-video">
                  <source src={file} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Send button */}
          {isPressed ? (
            <CustomButton onClick={handleSend} text="Send" />
          ) : (
            <ButtonDisabled text="Send" onClick={handleSend} />
          )}
        </form>
      </div>
    </div>
  );
}

export default MessageScreen;
