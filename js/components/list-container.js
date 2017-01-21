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
		console.log('submit event triggered');
		let newCards = [];
		newCards.push(this.props.text);
		this.setState({cards: newCards});
	}


	render() {
		return <List cards={this.state.cards} onChange={this.state.onAddInputChange} onSubmit={this.state.onAddSubmit} />;
	}
}