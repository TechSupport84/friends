import React from 'react'
import { BrowserRouter as Router, Routes ,Route ,Link,} from 'react-router-dom'
import NavBar from '../navigations/NavBar'
import HomePage from '../pages/HomePage'
import VideoPage from '../screens/VideoPage'
import UserProfile from '../screens/UserProfile'
import SettingPage from '../pages/SettingPage'
import Outils from '../pages/Outils'
import Monetize from '../pages/Monetize'
import StatusSetting from '../pages/StatusSetting'
import DashBoard from '../pages/DashBoard'
import MessagePage from '../pages/MessagePage'
function AppRoutes() {
  return (
    <Router>
     <NavBar/>
        
        <Routes>
           <Route path='/' element ={<HomePage/>} />
           <Route path ="/video" element ={<VideoPage/>} />
           <Route path ="/profile" element ={<UserProfile/>} />
           <Route path ="/settings" element ={<SettingPage/>} />
           <Route path ="/outils" element ={<Outils/>} />
           <Route path ="/monetize" element ={<Monetize/>} />
           <Route path ="/status" element ={<StatusSetting/>} />
           <Route path ="/dash" element ={<DashBoard/>} />
           <Route path ="/message" element ={<MessagePage/>} />

        </Routes>
    </Router>
  )
}

export default AppRoutes