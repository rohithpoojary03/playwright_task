//Page object model
//Page Object Model in TypeScript is a structured approach where web pages are modeled as classes with strongly typed elements and reusable methods, improving code maintainability, readability, and scalability in automation frameworks.
//Page Object Model (POM) in TypeScript is a design pattern used in test automation where each web page of an application is represented as a TypeScript class, containing:
//Locators (elements on the page)
//Methods (actions that can be performed on those elements)




import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';


test("User can login,add a product to the cart", async ({ page }) => {

await page.goto("https://www.demoblaze.com/index.html")


//Login Page
const loginPage = new LoginPage(page);
await loginPage.clickLoginLink();
//await page.pause();
await loginPage.enterUserName("pavanol");
await loginPage.enterPassword("test@123");
await loginPage.clickOnLoginButton();

//loginPage.performLogin("pavanol","test@123");


//Homepage
const homePage = new HomePage(page);
await homePage.addProductToCart("Samsung galaxy s6");
await page.waitForTimeout(2000);
await homePage.gotoCart();
await page.waitForTimeout(2000);

//cart page
const cartPage = new CartPage(page);
const isProductInCart = await cartPage.checkProductInCart("Samsung galaxy s6");
expect(isProductInCart).toBe(true);



})    