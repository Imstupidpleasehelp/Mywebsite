import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Menu = () => (
<nav role="navigation">
  <div id="menuToggle">
    
    <input type="checkbox" />
    
    
    <span></span>
    <span></span>
    <span></span>
    
    <Router>
    <ul id="menu">
      <Link to="/"><li>Home</li></Link>
      <Link to="/"><li>Home</li></Link>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
     
    </ul>
    </Router>
  </div>
</nav>
)