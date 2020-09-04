import React from 'react'
import { Avatar, Input } from '@material-ui/core'

function MessageSender() {

  //刷新功能非常重要;可以測試有preventDefault的差異//
  const handleSubmit = (e) => {
    // e.preventDefault();
  };
  return (

    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        {/* inputMessage */}

        <form >
          <input type="text"
            className="message_input"
            placeholder="what is your mind " />
          <input type="text" placeholder='image URL (option)' />
          <button onClick={handleSubmit} type="submit">Hidden submit</button>
        </form>

      </div>
      <div className="messageSender_bottom">
        {/* iconVideo */}
      </div>
    </div>
  )
}

export default MessageSender
