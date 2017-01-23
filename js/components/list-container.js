import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			cards: []
		};

		this.onAddInputChange = this.onAddInputChange.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChange(event) {
		console.log('change event triggered');
		this.setState({text: event.target.value});
	}

	onAddSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('submit event triggered');
		this.state.cards.push(this.state.text);
		console.log('newCards',this.state.cards);
		return false;
	}


	render() {
		return (
			<div className="list-container">
				<List cards={this.state.cards} onChange={this.onAddInputChange} onSubmit={this.onAddSubmit} />
			</div>
		);
	}
}
