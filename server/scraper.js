const puppeteer = require('puppeteer-core');
const chromePath = require('../chromium.path.js')

const myArgs = process.argv.slice(2);

let url = 'https://easycrypto.ai/nz/rates';
let url2 = 'https://www.independentreserve.com/api'

(async () => {
    const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: myArgs[0] || false,
    });

    const page = await browser.newPage();
    await page.goto(url);   
    let pageData = await page.evaluate(() => {
        let buttons = document.querySelectorAll('button');
        return buttons;
    })
    console.log(pageData)
    await browser.close();
})();

