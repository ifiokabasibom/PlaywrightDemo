const {test, expect} = require("@playwright/test")

test.use({viewport:{width:750, height:500}})

test("Verify Error Message", async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("wisdom")

    await page.locator("//button[normalize-space()='Login']").click()

    const errorMessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()

    console.log(`Error message is ${errorMessage}`)

    //Partial-match check
    expect(errorMessage.includes("Invalid")).toBeTruthy()

    //Full-match check
    expect(errorMessage==="Invalid credentials").toBeTruthy()

})
