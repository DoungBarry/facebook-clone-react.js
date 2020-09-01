import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'



function Sidebar() {
  return (
    <div className="sidebar">
      {/* 特殊連結 SidebarRow.js ,確認SidebarRow.js有編寫內容*/}
      {/* <SidebarRow title='Pages' />*/}
      <SidebarRow title='Friends' />
      <SidebarRow title='marketplace' />
      <SidebarRow title='直播' />
      <SidebarRow title='page' />
      <SidebarRow title='Message' />


    </div>
  )
}

export default Sidebar
