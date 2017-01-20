import React from 'react';

import Card from './card';

export default function List(props) {
	const cards = [];

	for (let i = 0; i < 3; i++) {
		cards.push(<Card />);
	}

	return (
		<div className='list'>
			<h3 className="list-title">{props.title}</h3>
			{cards}
			<form>
				<label for="text-input">Text Input:</label>
				<input id="text-input" type="text" />
			</form>
		</div>
	);
}

