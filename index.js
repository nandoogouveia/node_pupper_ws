const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
    throw "URL argumento 1";
    
}
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}
run();