import React from 'react'
import { Avatar, Input } from '@material-ui/core'
import './MessageSender.css'

// for  div.MessageSender_bottom （下方區域）
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'



function MessageSender() {

  //刷新功能非常重要;可以測試有preventDefault的差異//
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (

    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        {/* inputMessage */}

        <form >
          <input type="text"
            className="messageSender_input"
            placeholder="what is your mind " />
          <input type="text" placeholder='image URL (option)' />
          <button onClick={handleSubmit} type="submit">Hidden submit</button>
        </form>

      </div>
      <div className="messageSender_bottom">
        <div className="className messageSender_option" >
          <VideoLibraryIcon style={{ color: 'red' }} />
          <h3>Live video </h3>
        </div>

        <div className="className messageSender_option" >    <PhotoLibraryIcon style={{ color: 'green ' }} />
          <h3>green </h3></div>


        <div className="className messageSender_option" >        <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>orange</h3>
        </div>


        {/* iconVideo */}
      </div>
    </div>
  )
}

export default MessageSender
