/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../src/pages/Contact';
const puppeteer = require('puppeteer');

test('it renders correctly', () => {
  component = renderer.create(<Contact/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('E2E: Contact form can send messages', async() => {
   const browser = await puppeteer.launch({headless: false,});
   const page = await browser.newPage();
   await page.setViewport({width:1535, height:756});
   await page.goto('http:///localhost:3000/');
   await page.waitFor('#contact-form');
   const name= await page.waitForXPath("//input[1]");
   await name.type("testing");
   const email= await page.waitForXPath("//input[@type='email']");
   await email.type("test@PPP.com");
   const message= await page.waitForXPath("//textarea");
   await message.type("Regular testing the contacts page with puppeteer");
   await page.waitFor(2000);
   const button = await page.waitForXPath("//button");
   await button.click();
   await page.waitFor(2000);
   await browser.close();
 }, 100000);
