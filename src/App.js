import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Friend from './component/Friend/Friend';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Notfound from './component/NotFound/Notfound';
import FriendDetail from './component/FriendDetail/FriendDetail';


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
