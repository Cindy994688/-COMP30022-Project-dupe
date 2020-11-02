/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../../src/pages/Contact';

test('it renders correctly', () => {
  component = renderer.create(<Contact/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
