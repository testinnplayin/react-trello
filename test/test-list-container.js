'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('ListContainer component', function() {
	it('should render a list container with the correct fields', function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list-container');
		result.props.children.props.cards.should.be.a('array');
		result.props.children.props.onChange.should.be.a('function');
		result.props.children.props.onSubmit.should.be.a('function');
	});
});