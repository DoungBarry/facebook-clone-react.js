import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
// import SidebarRow from './Sidebar';
// import SidebarRow from './SidebarRow'

function App() {
  return (

    //BEM naming conveting 
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* Headers */}
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
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