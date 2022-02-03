//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<CanvasDraw />, document.querySelector("#app"));
