import React from "react";
import BottomBar from "./BottomBar";
import Porfolio from "./Porfolio";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/Porfolio" render={() => <Porfolio />} />
          <Route exact path="/Resume" render={() => <Resume />} />
          <Route exact path="/AboutMe" render={() => <AboutMe/>} />
        </Switch>
        <BottomBar />
      </React.Fragment>
    </Router>
  );
}

export default App;
