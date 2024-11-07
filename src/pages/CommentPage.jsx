import React, { useState } from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import "../Comments.css";
import LimitedText from '../components/LimitedText';
import CustomButton from '../components/Button';
import ButtonDisabled from '../components/ButtonDisable';

function CommentPage() {
  const [username] = useState("Jeancy");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  return (
    <div>
      <div className="form-comment">
        <form action="" method="post">
          <input 
            type="text" 
            placeholder="Comment..." 
            className="comment"
            onFocus={() => setIsButtonVisible(true)}
            onBlur={() => setIsButtonVisible(false)}
          />
          {isButtonVisible? <CustomButton text={"Comment"} onclick={()=>{}} />:(
            <ButtonDisabled  text={"Comment"} onClick={()=>{}}/>
          )}
        </form>
      </div>

      <div className="display-comment">
        <div className="user-comment-info">
          <img src="../jeancy.jpg" className="user-comment" alt="User profile" />
          <div className="menu-dot">
            <BiDotsHorizontal size={30} color="gray" />
          </div>
          <p className="username-comment">
            {username}
          </p>
        </div>
        <LimitedText text="I like Programming as well, so this is my passion.I like Programming as well, so this is my passion.
        I like Programming as well, so this is my passion.I like Programming as well, so this is my passion.I like Programming as well, so this is my passion.vI like Programming as well, so this is my passion.I like Programming as well, so this is my passion." limit={100} />
      </div>
      <hr />
    </div>
  );
}

export default CommentPage;
