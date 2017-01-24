import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
	const cards = props.cards;

	const card = cards.map(function(cContent, index) {
					return <p className="cards" key={ index }>{cContent}</p>;
				});

	return (
		<div className="card">
			{card}
		</div>
	);
}
