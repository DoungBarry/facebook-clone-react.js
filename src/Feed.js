
// 在app_body展示：中間的動態的區塊
import React from 'react'
import "./Feed.css"
import StoryReal from './StoryReal'

function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      {/* Feed 上面要有兩個元件製作*/}
      {/* 建立故事區 */}
      {/* 建立訊息傳送區 */}

    </div>
  )
}

export default Feed
