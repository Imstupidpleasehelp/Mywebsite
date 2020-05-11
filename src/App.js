import React from "react";
import "./App.css";
import { Menu } from "./subcomponents/menu";
import { Stars } from "./subcomponents/stars";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Homepage } from "./pages/home";
import { Projects } from "./pages/projects";
import {Skills} from './pages/Skills'

function App() {
  return (
    <div>
      <div className="alwaysthere">
        <Stars />
        <Menu />
      </div>
      <div className="willchange">
        <Router>
          <Switch>
          <Route path="/"><Homepage /></Route>
          <Route path="/Projects"><Projects /></Route>
          <Route path="/Skills"><Skills /></Route>
          </Switch>
</Router>
      </div>
    </div>
  );
}

export default App;
