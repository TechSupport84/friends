
import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import MessageScreen from '../screens/MessageScreen'
import Feed from './Feed'
import RightMessageBox from '../screens/RightMessageBox'

function MessagePage() {
  return (
    <>
  
    <div className="home-page">
    <LeftSidebar/>
      <Feed/>
      <RightSidebar/>
          <RightMessageBox/>
        </div>
  
        </>

  )
}

export default MessagePage