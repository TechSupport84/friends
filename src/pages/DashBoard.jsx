import React from 'react'
import SettingBar from './SettingBar'
import SideBarSetting from '../screens/SideBarSetting'
function DashBoard() {
  return (
    <div>
        <SideBarSetting/>
        <SettingBar/>
        <div className="outils-Stats">
           DashBoard
        </div>
    </div>
  )
}

export default DashBoard