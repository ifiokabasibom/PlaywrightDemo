import { test, expect } from '@playwright/test';

test('Verify Application Title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const url = await page.url();

  console.log(`Page URL is; ${url}`);

  const title = await page.title();

  console.log(`Page Title is; ${title}`);  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});



// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
