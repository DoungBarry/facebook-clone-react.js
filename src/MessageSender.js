
//載入react hook : useState//
import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import './MessageSender.css'
// for  div.MessageSender_bottom （下方區域）
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

//useStat 是 React hook 的 功能 ： funcation component 帶入 class component // 

// const [ 變數名稱 , 變數名稱的函數 ] ＝ useState  (state 變數初始值)


// const [imageUrl, setImageUrl] = useState("")

//依然發生錯誤, 去確認react.js 版本是否有支援 npm info react :16.13 abs

// react Hook 在16.8 才有支援 , 所以要更新版本
//注意，若要啟動 Hook，所有 React package 需要升級到 16.8.0 或是更高的版本。例如你忘了升級 React DOM，Hook 將無法正常執行。

// React Native 0.59 以上的版本支援 Hooks。


//this is funcation component So you connot ,declar const funcation outside .//


function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("")

  //刷新功能非常重要;可以測試有preventDefault的差異//
  const handleSubmit = (e) => {
    e.preventDefault();

    //刷新的時候將會帶入原始值的值
    setInput("")
    setImageUrl("")
  };


  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        {/* inputMessage */}
        <form >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // type="text"
            className="messageSender_input"
            placeholder={"what is your mind "} />

          <input
            value={imageUrl}
            // type="text" 
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='image URL (option)' />

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
