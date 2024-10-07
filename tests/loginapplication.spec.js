//This test was created our POM initial implementation and nothing more

const { test, expect } = require('@playwright/test');

import LoginPage from '../pages/loginpage'; // If you're using ES6 modules

import HomePage from '../pages/homepage';

//const LoginPage = require("../pages/loginpage");

test('Login To Application using POM', async({ page }) =>
{
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new LoginPage(page)
    
    await loginPage.loginToApplication("admin@email.com", "admin@123")

    const homepage = new HomePage(page)

    homepage.verifyManageOption()

    await homepage.logoutFromApplication()

    await loginPage.verifySignIn()

})