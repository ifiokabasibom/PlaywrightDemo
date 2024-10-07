const {test, expect} = require('@playwright/test')

test("Working with load state / How to handle dynmaic network calls in PW", async ({page}) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByText("New user? Signup").click()

    await page.waitForLoadState('networkidle')

    const count = await page.locator("//input[@type='checkbox']").count()

    expect(count).toBe(9)
})