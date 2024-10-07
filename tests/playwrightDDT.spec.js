const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require("../testdata.json")))
const testLoginData = JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven Login Test", function (){

    for(const data of testLoginData){
        test.describe(`Login with users ${data.id}`, function(){

            test(`Test reading from a JSON file using an application's login ${data.id} by looping`, async ({ page }) =>{
                await page.goto("https://freelance-learn-automation.vercel.app/login")
            
                await page.locator("//input[@id='email1']").fill(data.username)
            
                await page.locator("//input[@id='password1']").fill(data.password);
            
            })
        })
    }
}),

test.skip("Test reading from a JSON file using an application's login", async ({ page }) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@id='email1']").fill(testData.username)

    await page.locator("//input[@id='password1']").fill(testData.password);

    await page.pause()
})