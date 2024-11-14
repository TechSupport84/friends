import React, { useState } from 'react';
import CustomButton from '../components/Button';
import "../styles/MessageScreen.css";
import ButtonDisabled from '../components/ButtonDisable';
import OnlineUser from '../pages/OnlineUser';

function MessageScreen() {
  const [isPressed, setIsPressed] = useState(false);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileType(selectedFile.type.startsWith('image') ? 'image' : 'video');
    }
  };

  const handleSend = () => {
    console.log('Message:', message);
    console.log('File:', file);
    setMessage('');
    setFile(null);
    setFileType('');
  };

  const handleCancelFile = () => {
    setFile(null);
    setFileType('');
  };

  return (
    <div className="message-screen">
      <div className="message-head">Messages</div>
      <div className="message-box">
      <OnlineUser/>
        <div className="scrollable-box">
       
          <div className="messaage-detail">
            <div className="sender">
            <p>Hello!</p>
              <span className='message-time'>1 min</span>
            </div>
     
            <div className="receiver">
            <p>Hey!</p>
            <span className='message-time'>34 min</span>
      
            </div>
            <div className="receiver">
            <p>How are you  doing ?!</p>
            <span className='message-time'>37 min</span>
      
            </div>

            <div className="sender">
            <p>I am  doing well  and  you  ?  </p>
            <span className='message-time'> 40 min</span>
      
            </div>

            <div className="receiver">
            <p>How are you  doing ?!</p>
            <span className='message-time'>37 min</span>
      
            </div>
        </div>
        </div>
  
      </div>

      <div className="message-input-box">
        <form method="post">
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
            <label htmlFor="file-input" className="attach-button">
              Attach
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-input"
            />
          </div>

          {file && (
            <div className="file-preview">
              <button className="cancel-button" onClick={handleCancelFile}>X</button>
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
