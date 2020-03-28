import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function BottomBar() {
  const [appBarState, setAppBarState] = useState({});

  return (
    <div className="container fixed-bottom">
      <div className="row justify-content-center">
        <AppBar
          position="relative"
          className="col-lg-4 col-md-6 col-9 mx-auto justify-content-center"
          style={{
            backgroundColor: "#dbe2ef",
            bottom: "20px",
            alignItems: "center"
          }}
        >
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
              className="mr-3"
                variant="contained"
                style={{ backgroundColor: "#dbe2ef", color: "#FFFF" }}
              >
                Home
              </Button>
            </Link>
            <Link to="/Porfolio" style={{ textDecoration: "none" }}>
              <Button
                className="mr-3"
                variant="contained"
                style={{ backgroundColor: "#fab2ac", color: "#FFFF" }}
              >
                Porfolio
              </Button>
            </Link>
            <Link to="/Resume" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#eda1c1", color: "#FFFF" }}
              >
                Resume
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default BottomBar;
