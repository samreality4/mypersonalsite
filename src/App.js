import React, {useState, useEffect} from "react";
import BottomBar from "./components/BottomBar";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import AboutMe from "./pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 4000);
  }, []);


  return loadingScreen ? (
    <LoadingScreen />
  ) : (
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
