import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';

//這裡是後續要在post_option 使用的icon 組建
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Post(profilePic, image, username, timestamp, message) {
  return (
    <div className='post'>
      <div className="post_top">
        <Avatar src='https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg' className="post_avatar"></Avatar>
        {/* <Avatar src={profilePic} className="post_avatar"></Avatar> */}

        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>2020/09/05</p>
        </div>
      </div>


      <div className="post_bottom">
        <div className="message">
          <p>{message}</p>
        </div>
      </div>

      <div className="post_image">
        <img src="https://images.unsplash.com/photo-1477910191212-980963d84632?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=henry-co-PkusBfG84_c-unsplash.jpg&w=640" alt="" />
      </div>

      {/* <div className="post_image">
        <img src={image} alt="" />
      </div> */}




      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>

        </div>

        <div className="post_option">
          <ThumbDownIcon />
          <p>dontLike</p>
        </div>

        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div >
  )
}

export default Post
