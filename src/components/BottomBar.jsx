import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function BottomBar() {
  const [appBarColor, setAppBarColor] = useState("#dbe2ef");

  function handleNavClick(color) {
    setAppBarColor(color);
    console.log(color);
  }

  return (
    <div className="container fixed-bottom">
      <div className="row justify-content-center">
        <AppBar
          position="relative"
          className="col-xl-4 col-lg-5 col-md-6 col-11 mx-auto justify-content-center shadow-lg"
          style={{
            backgroundColor: appBarColor,
            bottom: "20px",
            alignItems: "center",
            borderRadius: "15px"
          }}
        >
          <Toolbar>
            <Link
              to={process.env.PUBLIC_URL + "/"}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={() => handleNavClick("#dbe2ef")}
                className="mr-3"
                variant="contained"
                style={{ backgroundColor: "#dbe2ef", color: "#FFFF" }}
              >
                Home
              </Button>
            </Link>
            <Link
              to={process.env.PUBLIC_URL + "/Portfolio"}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={() => handleNavClick("#fab2ac")}
                className="mr-3"
                variant="contained"
                style={{ backgroundColor: "#fab2ac", color: "#FFFF" }}
              >
                Portfolio
              </Button>
            </Link>
            <Link
              to={process.env.PUBLIC_URL + "/Resume"}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={() => handleNavClick("#eda1c1")}
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
