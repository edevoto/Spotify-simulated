import React from "react";
import Nav from "./controls.js";
import Tracks from "./tracks.js";
//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<>
			<div className="row interface d-flex flex-column justify-content-center align-content-center">
				<Tracks />
				<Nav />
				<audio>
					<source src="" />
				</audio>
			</div>
		</>
	);
}
