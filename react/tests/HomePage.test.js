/**
 * @jest-environment jsdom
 */

import { text } from 'body-parser';
import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../src/pages/HomePage';

test('it renders correctly', () => {
    component = renderer.create(<HomePage noSnow={true}/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it changes colour mode when access mode is clicked', () => {
    component.root.findByProps({value:"AC"}).props.onClick({target:{value: "AC"}});
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it changes colour mode when dark mode is clicked', () => {
    component.root.findByProps({value:"Dark"}).props.onClick({target:{value: "Dark"}});
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('it returns to normal mode from both colour modes', () => {
    component.root.findByProps({value:"AC"}).props.onClick({target:{value: "AC"}})
    let tree = component.toJSON();
    component.root.findByProps({testID:"defaultStyle"}).props.onClick({target:{value: ""}});
    expect(tree).toMatchSnapshot();
    component.root.findByProps({value:"Dark"}).props.onClick({target:{value: "Dark"}});
    tree = component.toJSON();
    component.root.findByProps({testID:"defaultStyle"}).props.onClick({target:{value: ""}});
    expect(tree).toMatchSnapshot();
});

text('it shows login when the login button is clicked', () => {
    component.root.findByProps({testID:"login-btn"}).props.onClick();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});