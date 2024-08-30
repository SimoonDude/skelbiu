const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
  console.log('# Browser starting');
  const browser = await puppeteer.launch({
    //headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  console.log('# Navigating to skelbiu.lt');
  await page.goto('https://www.skelbiu.lt/users/signin', { waitUntil: 'networkidle0' });

  await page.waitForSelector('#onetrust-reject-all-handler');
  console.log('# Rejecting cookies');
  await page.click('#onetrust-reject-all-handler');
  await delay();

  await page.type('#nick-input', process.env.LOGIN);
  await page.type('#password-input', process.env.PASSWORD);
  await page.click('#submit-button');
  console.log('# Logging in...');
  await page.screenshot({ path: screenshot.jpg});
  await page.waitForNavigation({ waitUntil: 'networkidle0' });


  await page.click('.close-button');
  await delay();
  console.log('# Logged in');


  const [updated, dataUpdated] = await page.evaluate((id) => {
    const getDataUpdated = (selector) => document.querySelector(`a#renewID${id}${selector}`).getAttribute('data-updated');
    try {
      return [false, getDataUpdated('.renewLink')];
    } catch (err) {
      return [true, getDataUpdated('.renewedAd')];
    }
  }, process.env.ID);

  switch (updated) {
    case false:
      console.log(`# ID${process.env.ID}` + dataUpdated);
      await page.click(`a#renewID${process.env.ID}.renewLink`);
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      console.log(`ID${process.env.ID} atnaujinta`);
      break;
    case true:
      console.error(`# ID${process.env.ID}` + dataUpdated);
      break;
  }
  await browser.close();
})();

function delay() { // delay for 10ms
  return new Promise(function (resolve) {
    setTimeout(resolve, 10)
  });
}
