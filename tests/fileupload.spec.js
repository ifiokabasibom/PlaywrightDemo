const {test, expect} = require('@playwright/test');

test("Verify file upload test", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator('#file-upload').setInputFiles("./tests/assets/APPPOVED.pdf");

    await page.locator('#file-submit').click()

    expect(await page.locator('//h3')).toHaveText("File Uploaded!")

    await page.waitForTimeout(5000)

})

//C:\Users\WISDOM-ABASIBOM\OneDrive - systemspecs.com.ng\Documents\youtube-prep\Playwright-Youtube-Using-JS\tests\assets\APPPOVED.pdf