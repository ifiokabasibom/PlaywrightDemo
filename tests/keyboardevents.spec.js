const {test, expect} = require('@playwright/test')

test("Tests Involving Keyboard Evenets  in Playwright", async ({page})=>{

    await page.goto("https://www.google.com")

    await page.locator("//textarea[@id='APjFqb']").type("Wisdom Abasibom")

    await page.waitForTimeout(2000)

    //await page.keyboard.press("Enter")

    await page.keyboard.press("Control+A")

    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+A")

    await page.waitForTimeout(1000)

    await page.keyboard.press("Control+C")

    await page.waitForTimeout(1000)

    await page.keyboard.press("Backspace")

    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+V")

    await page.keyboard.down("Shift")

    for(let i=0; i<'Abasibom'.length; i++){

        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

    await page.waitForTimeout(1000)

    await page.keyboard.press("Enter")

    await page.waitForTimeout(4000)
})