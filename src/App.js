import React from 'react'
import './App.css';
import BGA from './components/BackGroundAnimation/bg'
import Header from './components/Header/header'
import Footer from './components/Footer/footer';
import Terminal from './components/Terminal/terminal';
import Cat from './components/Cat/cat'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render(){
    return (
      <div className="App" >
        <BGA />
        

        <Router>
          <Header />
          <Switch>
          
            <Route exact path="/">
              <Terminal />
            </Route>
            
            <Route path="/cats">
              <Cat />
            </Route>

          </Switch>
        </Router>

        
        <Footer />
      </div>
    );
  }
  }
  

export default App;
