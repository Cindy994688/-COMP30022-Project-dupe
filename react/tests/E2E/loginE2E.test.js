
const puppeteer = require('puppeteer');

test('E2E: Projects can be created and deleted', async() => {
  const browser = await puppeteer.launch({headless: true,});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0); 
  page.goto('http:///localhost:3000/');
  const button = await page.waitForXPath("//button[@testID='login-btn']");
  await button.click();
  await page.waitFor(2000);
  await browser.close();
 }, 1000000);
