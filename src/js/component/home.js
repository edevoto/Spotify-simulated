import React, { useRef, useState } from "react";
//include images into your bundle

//create your first component
export function Home(props) {
	const songs = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];
	const [estado, setEstado] = useState(false);
	const pause = () => {
		cualkier.pause();
		setEstado(!estado);
		console.log(estado);
	};

	let cualkier = useRef(null);
	let urlBase = "https://assets.breatheco.de/apis/sound/";

	// const audioContainer = document.getElementsByClassName("tracks");
	// const newSong = songs.map((string, i) => {
	// 	<li className="track">{i}</li>;
	// 	<li className="track">{string[4]}</li>;
	// 	<li className="track">{string}</li>;
	// 	});

	return (
		<>
			<div className="row interface d-flex flex-column justify-content-center align-content-center">
				<ul className="tracks">
					{!!songs &&
						songs.map(song => {
							return (
								<li
									onClick={() => {
										cualkier.src = urlBase + song.url;
									}}
									key={song.id}>
									{song.name}
								</li>
							);
						})}

					<audio ref={r => (cualkier = r)} autoPlay></audio>
				</ul>

				<div className="buttons ">
					<button
						className="btn bg-dark btn-lg rounded-circle p-3 m-1"
						type="click"
						id="previous">
						back
					</button>
					<button
						onClick={pause}
						className="btn bg-dark btn-lg rounded-circle p-3 m-1"
						type="click"
						id="previous">
						play
					</button>{" "}
					<button
						className={"btn bg-dark btn-lg rounded-circle p-3 m-1"}
						type="click"
						id="previous">
						next
					</button>
				</div>
			</div>
		</>
	);
}
