import React from "react";
import "./App.css";
import { Menu } from "./subcomponents/menu";
import { Stars } from "./subcomponents/stars";

import { Planet } from "./subcomponents/planet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from './subcomponents/slider'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


function App() {
  return (
    
 <div>
        <div className="alwaysthere">
          <Stars />
          
         <div className="menu"><Menu /></div> 
          
</div>
<div className="slider">
          <Slider />
          
        </div>
        </div>
  );
}

export default App;
