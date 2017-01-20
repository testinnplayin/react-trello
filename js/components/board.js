import React from 'react';

import List from './list';

export default function Board(props) {
	const lists = [];
	for (let i = 0; i < 3; i++) {
		lists.push(<List />);
	}
	return (
		<div className="board">
			<h3 className="board-title">React Trello To Do List</h3>
			{lists}
		</div>
	);

}