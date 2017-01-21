import React from 'react';

// import Card from './card';
export class List extends ListContainer {
// export default function List(props) {
	// return <div>puppes</div>;
	return (
		<div className='list'>
			<h3 className="list-title">{props.title}</h3>
			<form>
				<label htmlFor="text-input">Text Input:</label>
				<input id="text-input" type="text" onChange={props.onChange} />
				<button type="submit" onSubmit={props.onSubmit}>Submit</button>
			</form>
		</div>
	);
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