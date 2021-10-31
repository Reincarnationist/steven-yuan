//import logo from './logo.svg';
import React from 'react'
import './App.css';
import BGA from './components/BackGroundAnimation/bg'
import Header from './components/Header/header'
import Terminal from './components/Terminal/terminal';


class App extends React.Component {
  render(){
    return (
      <div className="App" >
        <BGA />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Header />
          <Terminal />
          </div>
        
      </div>
    );
  }
  }
  

export default App;
