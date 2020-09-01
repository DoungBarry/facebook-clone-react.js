
// 在app_body展示：左側欄位

import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

//先在Material-ui網站複製好要用的ＩＣＯＮ再貼上到筆記本,一次都全部複製上去
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Store'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar() {
  return (
    <div className="sidebar">
      {/* 特殊連結 SidebarRow.js ,確認SidebarRow.js有編寫內容*/}

      {/* <SidebarRow Icon={user.photoURL} title={user.displayName} /> */}
      {/* 範例暫時用直接連結圖片 */}
      <SidebarRow src='https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg' title="我是東承" />
      <SidebarRow Icon={LocalHospitalIcon} title='病毒中心' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Friends' />
      <SidebarRow Icon={StorefrontIcon} title='Friends' />
      <SidebarRow Icon={VideoLibraryIcon} title='Friends' />
      <SidebarRow Icon={ExpandMoreOutIcon} title='Friends' />
      <SidebarRow title='Friends' />
      <SidebarRow title='marketplace' />
      <SidebarRow title='直播' />
      <SidebarRow title='page' />
      <SidebarRow title='Message' />


    </div>
  )
}

export default Sidebar
