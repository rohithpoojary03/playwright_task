//Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment.
//Locators are lazy: they do not perform any action or query until an action is performed on them. This allows locators to always point to the most up-to-date element matching the selector, even if the DOM changes between the time the locator is created and the time an action is performed on it.
//Locators are auto-waiting: Playwright automatically waits for the element to be ready before performing actions on it. This includes waiting for the element to be attached to the DOM, visible, stable, and enabled.
//Locators are retry-able: If an action fails because the element is not ready, Playwright will retry the action until it succeeds or a timeout is reached.

/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/

import {expect, Locator, test} from '@playwright/test'; 
test("Verify locators on the page", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

 // page.getByAltText() to locate an element, usually image, by its text alternative.
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();
//await logo.click();


//page.getByText() to locate by text content. 
//used for static text on the page like headings, paragraphs, links, etc.
//const text:Locator= page.getByText("Welcome to our store");
//await expect(text).toBeVisible(); 
  await expect(
    page.getByText("Welcome to our store")
  ).toBeVisible();

//page.getByRole() to locate by explicit and implicit accessibility attributes.
//role includes button, link, checkbox, textbox, heading, etc.
  await Promise.all([
    page.waitForURL(/\/register/),
    page.getByRole("link", { name: "Register" }).click(),
  ]);

  // ✅ Reliable assertion: URL (not blocked by Cloudflare UI)
  await expect(page).toHaveURL(/\/register/);


//page.getByLabel() to locate a form control by associated label's text.
//used for input fields, text areas, dropdowns etc.
 await expect(page.getByLabel("First name:")).toBeVisible();
  await page.getByLabel("First name:").fill("John");
  await page.getByLabel("Last name:").fill("Wick");
  await page.getByLabel("Email:").fill("johnwick@gmail.com");


  //page.getByPlaceholder() to locate an input by placeholder.
  //best for input fields where placeholder text is descriptive
 await page.getByPlaceholder("Search Store").fill("laptop");
});






