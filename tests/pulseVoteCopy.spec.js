const {test, expect} = require('@playwright/test')

test("Mounting for Sir Dickson SANDBOX", async ({page}) =>{

  // Navigate to the URL
  await page.goto('https://www.pulse.ng/influencer-awards/twitter/ck89yfb');

  // Wait for the iframe to be attached and visible
  const iframeElement = await page.waitForSelector('iframe[src="https://pulsembed.eu/p2em/z9jpegPxg/"]');

  // Get the iframe content
  const iframe = await iframeElement.contentFrame();

  if (iframe) {
    // Wait for the "Vote" button to be visible inside the iframe
    const voteButton = await iframe.waitForSelector('button:has-text("Vote")', { timeout: 5000 });

    if (voteButton) {
      // Click the "Vote" button
      const radioButton = page.locator('//input[@id=', PDI_answer63739828, ']');
      await radioButton.click();
      //Sir Dickson clicked on
      await page.waitForTimeout(3000)

      await voteButton.click({force:true});
      console.log('Vote button clicked successfully!');
    } else {
      console.log('Vote button not found.');
    }
  } else {
    console.log('Iframe not found or content not loaded.');
  }
    

    await page.waitForTimeout(5000)
})



test.skip("List out radio button options", async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.pulse.ng/influencer-awards/twitter/ck89yfb');

  // Wait for the iframe to be attached and visible
  const iframeElement = await page.waitForSelector('iframe[src="https://pulsembed.eu/p2em/z9jpegPxg/"]');

  // Get the iframe content
  const iframe = await iframeElement.contentFrame();

  if (iframe) {
    // Optional: wait for a specific element on the page inside the iframe
    await iframe.waitForSelector('.css-answer-span.pds-answer-span');

    // Log all available radio button options for debugging
    const spans = await iframe.locator('.css-answer-span.pds-answer-span');
    const count = await spans.count();
    for (let i = 0; i < count; i++) {
      const text = await spans.nth(i).innerText();
      console.log(`Found span: ${text}`);
    }

    // Use XPath to locate the specific radio button
    const radioButton = await iframe.locator('//span[contains(@class, "css-answer-span pds-answer-span") and normalize-space()="Sir Dickson"]');

    // Wait for the radio button to be visible
    await radioButton.waitFor({ state: 'visible' });

    // Click the radio button
    await radioButton.click();
    console.log('Radio button "Sir Dickson" selected!');

    // Wait for the "Vote" button to be visible inside the iframe
    const voteButton = await iframe.waitForSelector('button:has-text("Vote")', { timeout: 5000 });

    if (voteButton) {
      // Click the "Vote" button
      await voteButton.click({ force: true });
      console.log('Vote button clicked successfully!');
      // Wait for the <p> element to be visible
      const mathExpressionElement = await page.waitForSelector('span p');

      // Extract the text content from the <p> element
      const mathExpression = await mathExpressionElement.innerText();

      // Use regex to extract the operands from the text (e.g., "1 + 9")
      const match = mathExpression.match(/(\d+)\s*\+\s*(\d+)\s*=\s*/);

      if (match) {
          const operand1 = parseInt(match[1], 10);
          const operand2 = parseInt(match[2], 10);
          const result = operand1 + operand2; // Perform addition

          console.log(`Calculated Result: ${result}`);

          // Input the result into the specified input field
          const answerInput = await page.waitForSelector('#answer_14326701');
          await answerInput.fill(result.toString());
          console.log(`Inputted Result: ${result}`);
      } else {
          console.log('No valid arithmetic expression found.');
      }
    } else {
      console.log('Vote button not found.');
    }
  } else {
    console.log('Iframe not found or content not loaded.');
  }
});

test.only("List out radio button options Current", async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.pulse.ng/influencer-awards/twitter/ck89yfb');

  // Wait for the iframe to be attached and visible
  const iframeElement = await page.waitForSelector('iframe[src="https://pulsembed.eu/p2em/z9jpegPxg/"]', { timeout: 10000 });

  // Get the iframe content
  const iframe = await iframeElement.contentFrame();

  if (iframe) {
      // Wait for radio button options to load
      await iframe.waitForSelector('.css-answer-span.pds-answer-span', { timeout: 10000 });

      // Log radio button options count and text
      const spans = await iframe.locator('.css-answer-span.pds-answer-span');
      const count = await spans.count();
      console.log(`Found ${count} radio button options.`);
      for (let i = 0; i < count; i++) {
          const text = await spans.nth(i).innerText();
          console.log(`Option ${i}: ${text}`);
      }

      // Locate and click the specific radio button
      const radioButton = await iframe.locator('//span[contains(@class, "css-answer-span pds-answer-span") and normalize-space()="Sir Dickson"]');
      await radioButton.waitFor({ state: 'visible', timeout: 10000 });
      await radioButton.click();
      console.log('Clicked radio button "Sir Dickson".');

      // Wait for the "Vote" button to be visible and click it
      const voteButton = await iframe.waitForSelector('button:has-text("Vote")', { timeout: 10000 });
      await voteButton.click({ force: true });
      console.log('Clicked the "Vote" button.');

      // Wait longer for the iframe to reload with new content
      await page.waitForTimeout(4000); // wait for 4 seconds

      // Check for <p> elements again after voting
      await iframe.waitForTimeout(2000); // additional wait to ensure content loads

      // Log the entire iframe content to check what is rendered after voting
      const iframeContent = await iframe.evaluate(() => {
          return document.body.innerHTML; // Ensure we are accessing the iframe context correctly
      });
      console.log("Iframe content after voting:", iframeContent);

      // Check for <p> elements again after voting
      const pElements = await iframe.locator('p');
      const pCount = await pElements.count();
      console.log(`Found ${pCount} <p> elements in the iframe after voting.`);

      for (let i = 0; i < pCount; i++) {
          const pText = await pElements.nth(i).innerText();
          console.log(`Text in <p> element ${i}: ${pText}`);
      }

      // Check if any <p> element contains the expected math problem
      if (pCount > 0) {
          const mathExpression = await pElements.first().innerText();
          console.log("Math expression found:", mathExpression);

          // Extract and evaluate the math expression
          const answer = eval(mathExpression.split('=')[0].trim()); // Evaluate the expression
          console.log(`Calculated Answer: ${answer}`);

          // Fill in the answer in the captcha input field
          const captchaInput = await iframe.locator('input[name="answer"]');
          await captchaInput.fill(answer.toString());

          // Click the Vote button again (if necessary)
          await voteButton.click({ force: true });
          console.log('Clicked the "Vote" button after entering captcha.');
      } else {
          console.log("No math expression found in <p> elements.");
      }
  }
});



