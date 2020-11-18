import React, { useRef } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { useSpring, useChain, animated } from "react-spring";

function LoadingScreen() {
  const logoRef = useRef();
  const animeLogo = useSpring({
    from: {
      position: "absolute",
      bottom: "50%",
      left: "0%",
      transform: "rotate(0deg)",
    },
    to: async (next) => {
      await next({
        left: "43%",
        transform: "rotate(360deg)",
      });
    },
    ref: logoRef,
    config: { mass:  5}
  });

  const speechRef = useRef();

  const animeSpeech = useSpring({
    from: {
      display: "inline-block",
      position: "fixed",
      bottom: "60%",
      opacity: "0",
    },
    to: async (next) => {
      await next({
        opacity: "1",
      });
    },
    ref: speechRef,
  });

  useChain([logoRef, speechRef], [0.0, 1.5]);

  return (
    <div style={{marginRight: '2rem'}}>
      <ColorLinearProgress />
      <animated.div  style={animeLogo}>
        <img
          className="loading-image"
          src={process.env.PUBLIC_URL + "/images/SXG.png"}
          alt="logo"
          style={{display: "inline-block", borderRadius: "50%", boxShadow: "10px 10px 10px black"}}
        />
        <animated.div style={animeSpeech}>
          <img
            className="loading-image"
            src={process.env.PUBLIC_URL + "/images/finishspeechbubble.png"}
            alt="speech bubble"
          />
        </animated.div>
      </animated.div>
    </div>
  );
}

const ColorLinearProgress = withStyles({
  width: "100%",
  colorPrimary: {
    backgroundColor: "#e1f2fb",
  },
  barColorPrimary: {
    backgroundColor: "#f3dfe3",
  },
})(LinearProgress);

export default LoadingScreen;


