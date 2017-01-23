'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
	it('draws the list and contains all the appropriate fields', function() {
		const title = "To Do";
		const cards = ['Buy Milk', 'Walk Dog'];

		const fakeOnChange = function() {
			console.log('stuff');
		};

		const fakeOnSubmit = function() {
			console.log('more stuff');
		};


		const renderer = TestUtils.createRenderer();
		renderer.render(<List cards={cards} onChange={fakeOnChange} onSubmit={fakeOnSubmit} />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list');
		console.log(result);

		const h3 = result.props.children[0];
		h3.props.className.should.equal('list-title');
		h3.type.should.equal('h3');

		
		const form = result.props.children[1];
		console.log(form);
		form.props.onSubmit.should.equal(fakeOnSubmit);
		form.type.should.equal('form');

		const label = form.props.children[0];
		label.props.htmlFor.should.equal('text-input');
		label.type.should.equal('label');

		const input = form.props.children[1];
		input.props.id.should.equal('text-input');
		input.type.should.equal('input');
		input.props.type.should.equal('text');
		input.props.onChange.should.equal(fakeOnChange);

		const button = form.props.children[2];
		button.type.should.equal('button');
		button.props.type.should.equal('submit');
	});
});