/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/pages/Login';

test('it renders correctly', () => {
    component = renderer.create(<Login/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it renders a failure message upon bad imput', () => {
    component.root.findByProps({testID:"submitButton"}).props.onClick({preventDefault: () => {}});
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});



