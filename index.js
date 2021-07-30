import puppeteer from 'puppeteer';

const ID = process.env.id;
const PASSWORD = process.env.pw;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://example.com');
    //await page.screenshot({ path: 'example.png' });

    // let data = await page.$eval(
    //     '#container > div.wrap_inner > div > fieldset > div.table_inner.mg_t10 > table > tbody > tr:nth-child(3) > td:nth-child(6)',
    //     element => {
    //         return element.textContent;
    //     });
    // console.log(data);
    await browser.close();
})();