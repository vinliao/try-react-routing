import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Starter from './containers/Starter/Starter'
import Two from './containers/TwoWords/Two'
import Three from './containers/ThreeWords/Three'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav">
            <nav>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/two">two</Link></li>
                <li><Link to="/three">three</Link></li>
              </ul>
            </nav>
          </div>

          <Route path="/" exact component={Starter}/>
          <Route path="/two" exact component={Two}/>
          <Route path="/three" exact component={Three}/>
          
        </div>
      </BrowserRouter>
    );
  } 
}

export default App;
