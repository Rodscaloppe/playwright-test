const playwright = require('playwright');
const path = require('path');

void async function () {
  const browser = await playwright.firefox.launch();
  const page = await browser.newPage();
<<<<<<< HEAD
  await page.goto('https://cucumber.io/docs/gherkin/reference');
=======
  await page.goto('https://g1.globo.com');
>>>>>>> master
  await page.screenshot({ path: path.join(__dirname, 'screenshot.png') });
  await browser.close();
}()
