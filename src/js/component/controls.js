import React from "react";

export function Nav(props) {
	return (
		<div className="buttons ">
			<button
				className="btn bg-dark btn-lg rounded-circle p-3 m-1"
				type="click"
				id="previous">
				back
			</button>
			<button
				onClick={props.pause}
				className="btn bg-dark btn-lg rounded-circle p-3 m-1"
				type="click"
				id="previous">
				play
			</button>
			<button
				className="btn bg-dark btn-lg rounded-circle p-3 m-1"
				type="click"
				id="previous">
				next
			</button>
		</div>
	);
}

export default Nav;
