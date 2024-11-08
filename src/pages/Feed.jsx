import React, { useState } from 'react';
import '../Feed.css';
import Stories from './Stories';
import CreateFeed from '../components/CreateFeed';
import { BiCommentAdd, BiDollar, BiDotsVertical, BiLike, BiShare } from 'react-icons/bi';
import LimitedText from '../components/LimitedText';
import VideoPlayer from '../components/VideoPlayer';
import CommentPage from './CommentPage';
import { useNavigate } from 'react-router-dom';
import FeedBar from '../components/FeedBar';
import Following from '../components/Following';

const user = [
    { id: 1, name: "Jeancy", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 2, name: "James", image: "../jeancy.jpg" },
    { id: 5, name: "James", video: "../video.webm" ,image:"../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 3, name: "Mpoyi", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 4, name: "James", video: "../video.webm" ,image:"../jeancy.jpg"},
]
const Feed = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      
    <div className="feed">
     <FeedBar />
   <div className="add-story">
   <Stories />
   <CreateFeed />
   </div>
      <h2>Feed</h2>
        {user.map((user)=>(
          <div className="post-all">
          <div  key={user.id}className="post">
            <div className="post-head">
            <div className="menu-dot">
                  <BiDotsVertical size={30} color='gray'/>
                </div>
                <Following />
                <img src={user.image} alt={user.name} className='user-Image'/>

              <div className="user-info">
              
                <h3 className='username-post'>{user.name}</h3>
                <span>World</span>
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
 
      {/* Add more posts here */}
    </div>
    </>
  );
};

export default Feed;
