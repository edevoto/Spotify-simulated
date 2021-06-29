import React, { useRef, useState } from "react";
//include images into your bundle
const host = `https://assets.breatheco.de/apis/sound/`;
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
//create your first component
export function Home() {
	const [currentSongIndex, setCurrentSong] = useState(0);
	const [isPLaying, setIsPlaying] = useState(false);
	let myPlayer = useRef(null);

	const loadSong = index => {
		setCurrentSong(index);
		myPlayer.src = host + songs[currentSongIndex].url;
		myPlayer.play();
		setIsPlaying(true);
	};
	const pauseSong = () => {
		myPlayer.pause();
		setIsPlaying(false);
	};

	return (
		<div className="App">
			{songs.map((s, i) => (
				<li className="track" key={i} onClick={() => loadSong(i)}>
					{i === currentSongIndex}
					{s.name}
				</li>
			))}
			<div className="tracks">
				<button
					className="btn btn-lg btn-dark rounded-circle p-3 m-1"
					onClick={() =>
						loadSong(
							currentSongIndex > 0
								? currentSongIndex - 1
								: songs.length - 1
						)
					}>
					Prev
				</button>
				{isPLaying === true ? (
					<button
						className="btn btn-lg btn-dark rounded-circle p-3 m-1"
						onClick={() => pauseSong()}>
						Pause
					</button>
				) : (
					<button
						className="btn btn-lg btn-dark rounded-circle p-3 m-1"
						onClick={() => loadSong(currentSongIndex)}>
						Play
					</button>
				)}

				<button
					className="btn btn-lg btn-dark rounded-circle p-3 m-1"
					onClick={() =>
						loadSong(
							currentSongIndex >= songs.length - 1
								? 0
								: currentSongIndex + 1
						)
					}>
					Next
				</button>
				<audio ref={t => (myPlayer = t)} autoPlay></audio>
			</div>
		</div>
	);
}
