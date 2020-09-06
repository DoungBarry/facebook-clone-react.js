import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';

function Post(profilePic, image, username, timestamp, message) {
  return (
    <div className='post'>
      <div className="post_top">
        <Avatar src='https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg' className="post_avatar"></Avatar>
        {/* <Avatar src={profilePic} className="post_avatar"></Avatar> */}
        <div className="top_info">
          <div className="username">游東承</div>
          <div className="timestamp">2020/09/05</div>
        </div>


      </div>

      <div className="post_bottom">
        <div className="message">
          HAHAHA
        </div>
      </div>

      <div className="post_image">
        <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2776&q=80" alt="" />
      </div>


    </div>
  )
}

export default Post
