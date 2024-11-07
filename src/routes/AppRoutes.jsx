import React from 'react'
import { BrowserRouter as Router, Routes ,Route ,Link,} from 'react-router-dom'
import NavBar from '../navigations/NavBar'
import HomePage from '../pages/HomePage'
import VideoPage from '../screens/VideoPage'
import UserProfile from '../screens/UserProfile'
function AppRoutes() {
  return (
    <Router>
     <NavBar/>
        
        <Routes>
           <Route path='/' element ={<HomePage/>} />
           <Route path ="/video" element ={<VideoPage/>} />
           <Route path ="/profile" element ={<UserProfile/>} />

        </Routes>
    </Router>
  )
}

export default AppRoutes