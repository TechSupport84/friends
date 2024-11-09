import React, { useState } from 'react';
import '../Feed.css';
import { BiCommentAdd, BiDollar, BiDotsVertical, BiLike, BiShare } from 'react-icons/bi';
import LimitedText from '../components/LimitedText';
import VideoPlayer from '../components/VideoPlayer';
import CommentPage from '../pages/CommentPage';
import "../styles/VideoPage.css"
import FeedBar from '../components/FeedBar';
import Following from '../components/Following';
import SettingBar from '../pages/SettingBar';

const user = [
    { id: 1, name: "Jeancy", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 2, name: "James", image: "../jeancy.jpg" },
    { id: 5, name: "James", video: "../video.webm" ,image:"../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 3, name: "Mpoyi", image: "../jeancy.jpg",Description:"I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me .I want you  so much  and  need you ton help me ." ,tme: Date.now()},
    { id: 4, name: "James", video: "../video.webm" ,image:"../jeancy.jpg"},
]
const SettingScreen= () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="feed">
       <SettingBar/>
       <div className="setting">
        Setting
       </div>
    </div>
  );
};

export default SettingScreen;
