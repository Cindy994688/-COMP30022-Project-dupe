const puppeteer = require('puppeteer');

test('E2E: Carousel stops while', async() => {
  const puppet = await puppeteer.launch({
    headless: true,
  });
  const page = await puppet.newPage();
  await page.goto(
    'http://localhost:3000/'
  );
  const displayedPictures = page.$$('.alice-carousel__stage-item __active') 
  await page.click('.alice-carousel__play-btn-item');

}, 100000);
