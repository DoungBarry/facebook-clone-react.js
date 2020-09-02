
import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Story.css"

// 引入參數
function story({ image, profileSrc, title }) {
  return (

    //backgroundImage is pictures of background 
    //https://reactjs.org/docs/dom-elements.html#style  style={}的用法//
    <div style={{
      backgroundImage =`url(${image})`
    }} className="story" >
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div >
  )
}

export default story
