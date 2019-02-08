import React, { Component } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';




import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
