import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Profile from "./Components/Profile/Profile";
import Experiences from "./Components/Experiences/Experiences";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ProfileInfo from "./Components/Profile/Profile-Info/Profile-Info";
import ProfileImage from "./Components/Profile/Profile-Image/Profile-Image";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Experiences" component={Experiences} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
          <ProfileImage />
          <ProfileInfo />
          <Experiences />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
