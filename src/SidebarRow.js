
import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'
// import { Icon, Avatar, title } from '@material-ui/core'


//在sidebarRow 的函數內設置引數 
function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>

      {/* 設定Ａvatar , Icon 物件 置入sidebar  */}

      {src && <Avatar src={src} />}

      {Icon && <Icon />}


      <p>{title}</p>


    </div>
  )
}

export default SidebarRow