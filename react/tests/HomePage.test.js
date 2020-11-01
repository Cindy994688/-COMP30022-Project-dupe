/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../src/pages/HomePage';

jest.mock('../src/pages/HomePage');

test('it renders correctly', () => {
    jest.mock('react-dark-mode-toggle');
    component = renderer.create(<HomePage noSnow={true} noDarkModeToggle={true}/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it changes colour mode when access mode is clicked', () => {
    component.root.findByProps({value:"AC"}).props.onClick({target:{value: "AC"}});
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it returns to regular upon a second click', () => {
    component.root.findByProps({value:"AC"}).props.onClick({target:{value: "AC"}});
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

