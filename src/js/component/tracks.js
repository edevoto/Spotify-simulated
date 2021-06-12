import { string } from "prop-types";
import React from "react";

export function Tracks(props) {
	const audioContainer = document.getElementsByClassName("tracks");
	const newSong = songs.map((string, i) => {
		<li className="track">{i}</li>;
		<li className="track">{string[4]}</li>;
		<li className="track">{string}</li>;
	});
	//audioContainer.push(newSong);
	console.log(newSong);
	return <audio className="tracks">{newSong}</audio>;
}

export default Tracks;
