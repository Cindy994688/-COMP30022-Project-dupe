
const puppeteer = require('puppeteer');

test('E2E: Contact form can send messages', async() => {
   const browser = await puppeteer.launch({headless: true,});
   const page = await browser.newPage();
   await page.goto('http:///localhost:3000/');
   const button = await page.waitForXPath("//button[@testID='login-btn']");
   await button.click();
   await page.waitFor(2000);
   await browser.close();
 }, 100000);
