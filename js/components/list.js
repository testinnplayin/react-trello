import React from 'react';

import Card from './card';

export default function List(props) {
	// const cards = [];

	// for (let i = 0; i < 3; i++) {
	// 	cards.push(<Card />);
	// }

	return (
		<div className='list'>
			<h3 className="list-title">{props.title}</h3>
			<form>
				<label for="text-input">Text Input:</label>
				<input id="text-input" type="text" onChange={props.onChange} />
				<button type="submit" onSubmit={props.onSubmit}>Submit</button>
			</form>
		</div>
	);
}

class Change extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			changed: false
		}

		this.onAddInputChange = this.onAddInputChange.bind(this);
	}

	onAddInputChange() {
		console.log('change event triggered');
		this.setState({
			changed: true
		});
	}
}

class Submit extends React.Component {
	constructor(props) {
		super(props);

		e.preventDefault();

		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddSubmit() {
		console.log('submit event triggered');

	}
}