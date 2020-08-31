//這邊輸入 rfce   //  可以直接跳出 react的 componet 檔案 javascript 比較快

// 3.git [ 增加div classname="headerleft , mifflr , right "]

import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt=""></img>
      </div>

      <div className="header_middle"></div>
      <div className="header_right"></div>
    </div>
  )
}

export default Header
