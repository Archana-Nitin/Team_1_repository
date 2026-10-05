import {test} from '@playwright/test'
test('Team member1',async({page})=>
{
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();


  //Team member 2

  //team member 1

  //branch1



})