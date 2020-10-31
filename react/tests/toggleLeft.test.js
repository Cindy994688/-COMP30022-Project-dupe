/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import ToggleLeft from '../src/pages/ToggleLeft';

test('it renders correctly', () => {
    component = renderer.create(<ToggleLeft name="ronchiu"/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it expands after the cv button is clicked', () => {
    component.root.findByProps({testID:"leftCVbutton"}).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it expands after the project button is clicked', () => {
    component.root.findByProps({testID:"leftProjectbutton"}).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


