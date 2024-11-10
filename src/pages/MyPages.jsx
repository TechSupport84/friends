import React from 'react'
import UserPage from '../screens/UserPage'
import LeftSidebar from './LeftSidebar'
import RightSidebar from "./RightSidebar"


function MyPages() {
  return (
    <div className='Home-page'>
     <LeftSidebar/>
      <UserPage/>
      <RightSidebar />
      </div>
  )
}

export default MyPages