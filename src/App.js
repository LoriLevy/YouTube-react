import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './components/YouTubeComponent';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import { SideBar } from './containers/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HeaderNav />
          <SideBar />
        </div>
        {/* <Youtube /> */}
      </div>
    );
  }
}

export default App;