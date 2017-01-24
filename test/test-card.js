'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('card component', function() {
	it('draws a card with content', function() {
		const content = ["This is really cool"];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card cards={content} />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		
		const p = result.props.children;
		p[0].props.className.should.equal('cards');
		p[0].type.should.equal('p');
		p[0].props.children.should.be.a('string');
		p[0].props.children.should.equal(content[0]);
	});
});