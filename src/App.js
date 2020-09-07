import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import Login from './Login';
// import MessageSender from './MessageSender';


function App() {
  const user = null;
  return (

    //BEM naming conveting 
    //透過login 會將資料推送到 資料（data layer ) 
    //每個組件都是一個datalayer 

    // Data Layer -----------------------
    //這邊開始是 redux 可以響應/
    //react-content-api //

    //創建登入頁面： !user? 這個是一個條件問題 XXX
    //    XXX ?（ture）：（false）

    <div className="app">
      {!user ? (
        <Login />

      ) : (

          <>
            {/* //插入將要登入後出現的頁面 // */}
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              {/* <Feed /> */}
              {/* Headers */}
              {/* Sidebar */}
              <Widgets />
            </div>
          </>

        )
      }
    </div >

  );



  // 登入後的首頁
  // <Header />
  //   <div className="app_body">
  //     <Sidebar />
  //     <Feed />
  //     {/* <Feed /> */}
  //     {/* Headers */}
  //     {/* Sidebar */}
  //     <Widgets />
  //   </div>


  //-----------------------------------刪除 ------------------------
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div >


}

export default App;