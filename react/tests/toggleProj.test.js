/**
 * @jest-environment jsdom
 */

const puppeteer = require('puppeteer');
import React from 'react';
import renderer from 'react-test-renderer';
import ToggleProj from '../src/pages/ToggleProj';


test('it renders correctly', () => {
  component = renderer.create(<ToggleProj/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('E2E: Main project section expands when clicked', async() => {
  const puppet = await puppeteer.launch({
    headless: true,
  });
  const page = await puppet.newPage();
  await page.goto(
    'http://localhost:3000/'
  );
  await page.click('div.groupPr');
  var response = await page.$('#projectIntro');
  response = response == null;
  await puppet.close();
  expect(response).toBe(false)
}, 100000);

test('E2E: Main project section dissapears when clicked again', async() => {
  const puppet = await puppeteer.launch({
    headless: true,
  });
  const page = await puppet.newPage();
  await page.goto(
    'http://localhost:3000/'
  );
  await page.click('div.groupPr');
  await page.click('div.groupPr');
  var response = await page.$('#projectIntro');
  response = response == null;
  await puppet.close();
  expect(response).toBe(true)
}, 10000);
