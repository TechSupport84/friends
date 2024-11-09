import React from 'react';
import CustomButton from '../components/Button';
import "../styles/MessageScreen.css";

function MessageScreen() {
  return (
    <div className="message-screen">
          <div className="message-head">Messages</div>
      <div className="message-box">
      <div className="scrollable-box">
        {/* Display each message here */}
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
          <textarea type="text" placeholder="Message" className="message" />
          <CustomButton onClick={() => {}} text="Send" />
        </form>
      </div>
    </div>
  );
}

export default MessageScreen;
