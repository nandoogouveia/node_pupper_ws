const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
    throw "URL argumento 1";
    
}
