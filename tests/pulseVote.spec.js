const {test, expect} = require('@playwright/test')

test("Mounting for Sir Dickson", async ({page}) =>{
    await page.goto("https://www.pulse.ng/influencer-awards/twitter/ck89yfb")

    const frame = await page.frame({
        url: 'https://pulsembed.eu/p2em/z9jpegPxg/', // The URL of the iframe
    });

    if (frame) {
        // Now you can interact with elements inside the iframe
        // Example: If there's a button inside the iframe
        const voteButton = await frame.getByText('Vote'); // Replace 'button' with the actual selector
        if (voteButton) {
          await voteButton.click(); // Perform click or other interactions
          console.log('Button clicked inside the iframe.');
        } else {
          console.log('Button not found inside the iframe.');
        }
      } else {
        console.log('Iframe not found!');
      }



    // const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
    // const iframe = await page.frameLocator("//frame[@name='packageListFrame']")

    // page.waitForLoadState('networkidle')
    // await page.getByText("Vote").click()

    await page.waitForTimeout(5000)
})