 const{test, expect} = require("@playwright/test")

 test("Verify auto-completion using KEYBOARD ACTIONS", async ({page}) => {
    
    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").type("Playwright ")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")
 
})

 test("Verify auto-completion using LOOP", async ({page})=>{

    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").type("Remita ")

    await page.waitForSelector("//li[@role='presentation']")

    const elements = await page.$$("//li[@role='presentation']")

    for(let i=0; i<elements.length; i++){
        const text = await elements[i].textContent()

        if(text.includes('customer')){
            await elements[i].click()
            break
        }
    }
})