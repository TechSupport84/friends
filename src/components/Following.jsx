import React,{useState} from 'react'
import "../styles/Following.css"

function Following() {
 const [isFollowing, setIsFollowing] =useState(false)
  return (
    <div>
      <div className="followings">
    {isFollowing ?  <a href='#'> Following</a>:(
    <a href='#'> Follow +</a>
     )}
                 
 </div>
    </div>
  )
}

export default Following