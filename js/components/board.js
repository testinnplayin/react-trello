import React from 'react';

import ListContainer from './list-container';

export default function Board() {

	return (
		<div className="board">
			<h3 className="board-title">React Trello To Do List</h3>
			<ListContainer />
		</div>
	);

}