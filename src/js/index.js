//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(
	<div className="interface">
		{" "}
		<Home />{" "}
	</div>,
	document.querySelector("#app")
);
