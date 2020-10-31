/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../src/pages/HomePage';

test('it renders correctly', () => {
    component = renderer.create(<HomePage/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});



