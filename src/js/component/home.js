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

	const [next, setNext] = useState({
		url: null,
		name: null,
		id: 0
	});

	const [estado, setEstado] = useState(false);
	const pause = () => {
		cualkier.pause();
		setEstado(!estado);

		//console.log(estado);
	};
	let cualkier = useRef(null);
	let urlBase = `https://assets.breatheco.de/apis/sound/`;

	return (
		<>
			<div className="row interface d-flex flex-column justify-content-center align-content-center">
				<ul className="tracks">
					{!!songs &&
						songs.map((song, i) => {
							return (
								<li
									className="track"
									onClick={() => {
										cualkier.src = urlBase + song.url;

										setNext({
											url: songs[i + 1].url,
											name: songs[i + 1].name,
											id: songs[i + 1].id
										});
										return next;
										//console.log(next);
									}}
									key={song.id}>
									{song.name}
								</li>
							);
						})}
					<audio ref={r => (cualkier = r)} autoPlay></audio>
				</ul>

				<div className="buttons ">
					{
						<button
							onClick={() => {
								songs.map((song, i) => {
									cualkier.src = urlBase + song.url;
									setNext({
										url: next[i - 1].url,
										name: next[i - 1].name,
										id: next[i - 1].id
									});
									console.log(songs[i--]);
								});
							}}
							className="btn bg-dark btn-lg rounded-circle p-3 m-1"
							type="click"
							id="previous">
							back
						</button>
					}

					<button
						onClick={pause}
						className="btn bg-dark btn-lg rounded-circle p-3 m-1"
						type="click"
						id="previous">
						play
					</button>
					<button
						onClick={() => {
							songs.map((song, i) => {
								cualkier.src = urlBase + next.url;
								setNext({
									url: songs[i + 1].url,
									name: songs[i + 1].name,
									id: songs[i + 1].id
								});
								return next;
							});
						}}
						key={next.id}
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
