import React from 'react';

// import Card from './card';
export default class List extends React.Component {
// export default function List(props) {
	constructor(props) {
		super(props);
		console.log('props',this.props);
	}

	render() {
		return <div className='list'>
				<h3 className="list-title">List</h3>
				<form onSubmit={this.props.onSubmit}>
					<label htmlFor="text-input">Text Input:</label>
					<input id="text-input" type="text" onChange={this.props.onChange} />
					<button type="submit">Submit</button>
				</form>
			</div>;
	}
}

// class Change extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.onAddInputChange = this.onAddInputChange.bind(this);
// 	}

// 	onAddInputChange(event) {
// 		console.log('change event triggered');
// 		this.setState({text: event.target.value});
// 	}
// }

// class Submit extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.onAddSubmit = this.onAddSubmit.bind(this);
// 	}

// 	onAddSubmit(e) {
// 		e.preventDefault();
// 		console.log('submit event triggered');
// 		let newCards = [];
// 		newCards.push(this.props.text);
// 		this.setState({cards: newCards});
// 	}
// }
