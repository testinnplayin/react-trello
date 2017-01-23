import React from 'react';

// import Card from './card';
export default class List extends React.Component {
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

