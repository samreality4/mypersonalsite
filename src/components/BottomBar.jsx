import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function BottomBar() {
const [appBarState, setAppBarState] = useState({})

  return (
    <div className="container fixed-bottom">
      <div className="row align-content-center">
        <AppBar
          position="relative"
          className="col-md-7 col-10 mx-auto align-content-center"
          style={{
            backgroundColor: "#dbe2ef",
            bottom: "20px",
            alignItems: "center"
          }}
        >
          <Toolbar>
            <Link to="/Home" style={{ textDecoration: "none" }}>
              <Button className="mr-2" variant="contained" style={{ backgroundColor: "#bee4d2", color: "#FFFF" }}>
                Home
              </Button>
            </Link>
            <Link to="/Porfolio" style={{ textDecoration: "none" }}>
              <Button
                className="mr-2"
                variant="contained"
                style={{ backgroundColor: "#fab2ac", color: "#FFFF" }}
              >
                Porfolio
              </Button>
            </Link>
            <Link to="/Resume" style={{ textDecoration: "none" }}>
              <Button className="mr-2" variant="contained" 
              style={{ backgroundColor: "#eda1c1", color: "#FFFF" }}>
                Resume
              </Button>
            </Link>
            <Link to="/AboutMe" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ backgroundColor: "#dbe2ef", color: "#FFFF" }}>
                About Me
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default BottomBar;
