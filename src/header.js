//這邊輸入 rfce   //  可以直接跳出 react的 componet 檔案 javascript 比較快

// 3.git [ 增加div classname="headerleft , mifflr , right "]

import React from 'react'
import './Header.css'

//這邊是 header_left 
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import WidgetsIcon from '@material-ui/icons/Widgets';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { Avatar, IconButton } from '@material-ui/core';
//這邊是 header_right//
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt=""></img>

        <div className="header_input" >
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>





      <div className="header_middle">



        <div className="header_option">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>

        <div className="header_option">
          <VideoLibraryIcon fontSize="large" />
        </div>

        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>

        <div className="header_option">
          <WidgetsIcon fontSize="large" />
        </div>

      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Hello test </h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>


        <IconButton>
          <ForumIcon></ForumIcon>
        </IconButton>


        <IconButton>
          <NotificationsIcon></NotificationsIcon>
        </IconButton>


        <IconButton>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>

      </div>
    </div>

  )
}

export default Header
