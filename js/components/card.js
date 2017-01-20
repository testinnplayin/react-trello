import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
	return (
		<div className="card">
			<p className="card-content">{props.content}</p>
		</div>
	);
}