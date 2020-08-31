//這邊輸入 rfce   //  可以直接跳出 react的 componet 檔案 javascript 比較快

// 3.git [ 增加div classname="headerleft , mifflr , right "]


import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="header_left"></div>
      <div className="header_middle"></div>
      <div className="header_right"></div>
    </div>
  )
}

export default Header
