const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');

app.use(helmet());



/*app.listen('browser-test', async (req, res) => {
    const browsers = ['firefox', 'chrome'];
    await testBrowser(browsers);

});

async function testBrowser(browsers) {
    let errors = false;
    const {Builder, By, Key} = require('selenium-webdriver');

    browsers.forEach(async browser => {
        let driver = await new Builder().forBrowser(browser).build();
        try {
            await driver.get('localhost:3000');
            await driver.findElement(By.name('.products__component')).sendKeys('webdriver', Key.RETURN);
        } finally {
            await driver.quit();
        }
    });
}*/

app.listen(3000, (err) => {
    if (err) {
        console.log("Error ", err);
    } else {
        console.log("App is running on port 3000");
    }
});
