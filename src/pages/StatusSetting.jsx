import React from 'react'
import SettingBar from './SettingBar'
import SideBarSetting from '../screens/SideBarSetting'

function StatusSetting() {
  return (
    <div>
        <SideBarSetting/>
        <SettingBar/>
        <div className="outils-Stats">
            Status
        </div>
    </div>
  )
}

export default StatusSetting