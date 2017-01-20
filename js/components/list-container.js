import React from 'react';
import List from './list';

export class ListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			cards: []
		};

		this.onAddInputChange = this.onAddInputChange.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	render() {
		return <List cards={this.state.cards} onChange={this.state.onAddInputChange} onSubmit={this.state.onAddSubmit} />;
	}
}