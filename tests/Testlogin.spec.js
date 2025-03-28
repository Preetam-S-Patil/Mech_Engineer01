const {test, expect} = require("@playwright/test");

test("login", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[normalize-space()='Login']").click();

    await expect(page.locator("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span")).toBeVisible();

    await page.waitForTimeout(5000);
})
/////
