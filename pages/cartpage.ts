import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private productNamesInCart: Promise<Array<Locator>>;
 


  constructor(page: Page) {
    this.page = page;

    // CSS selector to select all product name cells in the cart table
    this.productNamesInCart = this.page.locator('#tbodyid tr td:nth-child(2)').all();
  }

  // Method to check if a specific product is present in the cart
  async checkProductInCart(productName: string): Promise<boolean> {
    const products = await this.productNamesInCart;


    for (const product of products) {
      const name:any = (await product.textContent())?.trim();
      console.log(name);

      if (name === productName) {
        return true;
      }
    }

    return false;
  }
}