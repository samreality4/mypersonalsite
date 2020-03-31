import React from "react";
import BottomBar from "./BottomBar";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import AboutMe from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => <AboutMe/>} />
          <Route exact path={process.env.PUBLIC_URL + "/Portfolio"} render={() => <Portfolio />} />
          <Route exact path={process.env.PUBLIC_URL + "/Resume"} render={() => <Resume />} />
        </Switch>
        <BottomBar />
      </React.Fragment>
    </Router>
  );
}

export default App;
