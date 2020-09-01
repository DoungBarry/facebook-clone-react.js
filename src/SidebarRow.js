
import React from 'react'
import './SidebarRow.css'
import { Icon } from '@material-ui/core'


//在sidebarRow 的函數內設置引數 
function SidebarRow(src, Icon, title,) {
  return (
    <div className='sidebarRow'>
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
