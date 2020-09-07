import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
// import MessageSender from './MessageSender';


function App() {
  const user = null;
  return (
    //BEM naming conveting 
    <div className="app">
      {/* 這是一個條件式： ！user?這個user不是null?*/}

      {/* {!user ? (){ } */}

)
}

      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* <Feed /> */}
        {/* Headers */}
        {/* Sidebar */}
        <Widgets />
      </div>
    </div>

  );

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