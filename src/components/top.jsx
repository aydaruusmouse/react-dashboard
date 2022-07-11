import React from 'react'
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
function topbar () {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Aido Tech</span>
            </div>
            <div className="topRight">
                <div className="topbar_icons">
                <NotificationsIcon/>
                <span className="badge">3</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar;