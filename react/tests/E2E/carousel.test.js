const puppeteer = require('puppeteer');

test('E2E: Carousel stops while', async() => {
  const puppet = await puppeteer.launch({
    headless: false,
  });
  const page = await puppet.newPage();
  await page.setDefaultNavigationTimeout(0); 
  page.goto(
  'http://localhost:3000/'
  );
  const displayedPictures = page.$$('.alice-carousel__stage-item __active') 
  await page.click('.alice-carousel__play-btn-item');

}, 1000000);
