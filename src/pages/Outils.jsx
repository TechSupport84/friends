import React from 'react'
import SettingBar from './SettingBar'
import SideBarSetting from '../screens/SideBarSetting'
function Outils() {
  return (
    <div>
        <SideBarSetting/>
        <SettingBar/>
        <div className="outils-Stats">
            Stats
        </div>
    </div>
  )
}

export default Outils