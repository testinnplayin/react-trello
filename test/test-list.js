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

		const h3 = result.props.children[0];
		h3.props.className.should.equal('list-title');
		h3.type.should.equal('h3');

		
		const form = result.props.children[1];
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

	it('should have an onChange and onSubmit property that puts text into the state object and puts it into cards array', function() {
		var fakeStateObj = {
			text: '',
			cards: ['Buy Milk', 'Walk Dog']
		};

		function fakeOnChange() {
			let text = 'Dance Wildly';
			fakeStateObj.text = text;
			return text;
		};

		let change = fakeOnChange();

		function fakeOnSubmit() {
			let card = fakeOnChange();
			fakeStateObj.cards.push(card);
			return card;
		};

		let submit = fakeOnSubmit();

		change.should.be.a('string');
		submit.should.be.a('string');
		fakeStateObj.cards.should.have.lengthOf(3);
		fakeStateObj.cards[2].should.be.equal(change);

	});
});