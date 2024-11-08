import React, { useState } from 'react';
// import '../Feed.css';
import Stories from './Stories';
import CreateFeed from '../components/CreateFeed';
import { BiCommentAdd, BiDollar, BiDotsVertical, BiLike, BiShare } from 'react-icons/bi';
import LimitedText from '../components/LimitedText';
import VideoPlayer from '../components/VideoPlayer';
import CommentPage from './CommentPage';
import "../styles/VideoPage.css"
import "../styles/ProfileInfo.css"
import { useNavigate } from 'react-router-dom';
import FeedBar from '../components/FeedBar';

const user = [
    { id: 1, name: "Jeancy", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 2, name: "James", image: "../jeancy.jpg" },
    { id: 5, name: "James", video: "../video.webm" ,image:"../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 3, name: "Mpoyi", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 4, name: "James", video: "../video.webm" ,image:"../jeancy.jpg"},
]
const ProfileInfo = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
     
     <div className="feed-user">
     <div className="cover-picture">
  <img src="../jeancy.jpg" className="cover-pic" alt="Cover" />
  <div className="button cover-button">+ add cover</div>
  <div className="userProfile">
    <img src="../jeancy.jpg" className="userImage" alt="Profile" />
    <div className="button profile-button">+ add</div>
  </div>


</div>
<div className="user-profile-id">
    Jeancy Mpoyi
    <div className="email">jeancympoyi@gmail.com</div>
    <span>+254 743303216</span>
    <div className="follower">
        
        <a href=''>24k Followers</a>
    </div>
    <div className="following">
        <a href=''>  644 Following</a>
      
    </div>
    <div className="button-edit-profile">
        -Edit
    </div>
    <div className="money-earn">
        <a href=''>Money Icon</a>
    </div>
    <div className="message-Box">
        <button>Message Icon</button>
    </div>
  </div>
 
  
    
      <div className="scrollable-feed">
        {user.map((user)=>(
          <div className="post-all">
          <div  key={user.id}className="post">
            <div className="post-head">
            <div className="menu-dot">
                  <BiDotsVertical size={30} color='gray'/>
                </div>
                <img src={user.image} alt={user.name} className='user-Image'/>

              <div className="user-info">
              
                <h3 className='username-post'>{user.name}</h3>
                <p>{user.tme}</p>

              </div>
              <div className="sep-feed"/>
            <div className='feed-content'>
               <LimitedText text={user.Description} limit={100}/>
               </div>
            </div>
  
            {user.video ? <VideoPlayer src={user.video} className='post-image'/>:(
          <img src ={user.image}alt={user.name} className='post-image' />

                )}
   
             <div className='sep-post'/>             
              <div className="post-likebar">
                <div className="like">
                <BiLike size={25} color='gray'/>
              12k <span className="like-style">Likes</span> 
              </div>
              <div className="CommentIcon">
              <BiCommentAdd size={25} color='gray'onClick={()=>setVisible(!visible)} className='commentIcon'/>
                232 <span className="like-style" onClick={()=>setVisible(!visible)} >Comments</span> 
              </div>
              <div className="earn-money">
              <BiDollar size={25} color='gray'/>
                20 <span className="like-style">Won</span> 
              </div>
              <div className="shared">
              <BiShare size={25}color='gray' />
              23k <span className="like-style">Shared</span> 
              </div>

              </div>

              </div>
              {visible && <CommentPage />}
            
          </div>
        ))}
        </div>
 
      {/* Add more posts here */}
    </div>
    </>
  );
};

export default ProfileInfo;
