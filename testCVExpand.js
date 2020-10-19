const puppeteer = require('puppeteer');

test('E2E: CV expands when "show cv" button is clicked', (async() => {
  const puppet = await puppeteer.launch({
    headless:true,
  });
  const page = await puppet.newPage();
  await page.goto(
    'http://localhost:3000'
  );
  await page.click('div.togglel');
  var response = await page.$('#CV');
  response = response ==null;
  console.log(response);
  expect(response).toBe(false)
}, 100000);
