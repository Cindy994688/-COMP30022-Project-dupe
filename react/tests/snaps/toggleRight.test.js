/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import ToggleRight from '../../src/pages/ToggleRight';

test('it renders correctly', () => {
    component = renderer.create(<ToggleRight name="ronchiu"/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it expands after the cv button is clicked', () => {
    component.root.findByProps({testID:"rightCVbutton"}).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it expands after the project button is clicked', () => {
    component.root.findByProps({testID:"rightProjectbutton"}).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});





