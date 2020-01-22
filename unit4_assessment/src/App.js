import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import './App.css'
import Video from './Components/Video';
import Home from './Components/Home'
import About from './Components/About';



function App() {
  return (
    <div className="App">
      <nav className = 'NavBar'>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/Video">Video</Link>{" "}
   
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/video" component={Video} />s
      </Switch>

    </div>
  );
}

export default App;
