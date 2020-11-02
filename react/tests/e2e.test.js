const puppeteer = require('puppeteer');

test('E2E: CV expands when "show cv" button is clicked', async() => {
    const puppet = await puppeteer.launch({
      headless:true,
    });
    const page = await puppet.newPage();
    await page.waitFor(3000);
    page.setDefaultNavigationTimeout(0); 
    page.goto('http://localhost:3000');
    const button = page.waitForXPath("//button[@className='togglel']");
    await page.waitFor(1000);
    await page.click(button);
    var response = page.$('#CV');
    response = response ==null;
    console.log(response);
    expect(response).toBe(false)
  }, 1000000);
  
  test('E2E: Contact form can send messages', async() => {
    const puppet = await puppeteer.launch({
        headless:true,
      });
    await page.waitFor(1000);
    const page = await puppet.newPage();
    await page.waitFor('#contact-form');
    const name= page.waitForXPath("//input[1]");
    await page.waitFor(1000);
    await name.type("testing");
    const email= page.waitForXPath("//input[@type='email']");
    await page.waitFor(1000);
    await email.type("test@PPP.com");
    const message= page.waitForXPath("//textarea");
    await page.waitFor(1000);
    await message.type("Regular testing the contacts page with puppeteer");
    await page(2000);
    const button = page.waitForXPath("//button");
    await page.waitFor(1000);
    await button.click();
    await page.waitFor(2000);
    await browser.close();
   }, 1000000);
  
   test('E2E: Projects can be created and deleted', async() => {
    const puppet =  await puppeteer.launch({
      headless:true,
    });
    const page = await puppet.newPage()
    const button = await page.waitForXPath("//button[@testID='login-btn']");
    await page.waitFor(1000);
    await button.click();
    await page.waitFor(2000);
    const buttonCreate = page.waitForXPath("//button[@testID='add-proj-btn']");
    await page.waitFor(1000);
    await buttonCreate.click();
    const input= page.waitForXPath("//input[@name='title']");
    await page.waitFor(1000);
    await input.type("Test title");    
    const inputDesc= page.waitForXPath("//textarea[@name='description']");
    await page.waitFor(1000);
    await inputDesc.type("A project for testing");
    const inputGit= page.waitForXPath("//input[@name='giturl']");
    await page.waitFor(1000);
    await inputGit.type("");
    const option= page.waitForXPath("//option[@value='6']");
    await page.waitFor(1000);
    await option.click();
    const optionPerson= page.waitForXPath("//option[@value='ronchiu']");
    await page.waitFor(1000);
    await optionPerson.click();
    const buttonSubmitAdd = page.waitForXPath("//button[@testID='add-proj-submit']");
    await page.waitFor(1000);
    await buttonSubmitAdd.click();
    const buttonDelete = page.waitForXPath("//button[@testID='del-proj-btn']");
    await page.waitFor(1000);
    await buttonDelete.click();
    const optionPersonDel= page.waitForXPath("//option[@value='ronchiu']");
    await page.waitFor(1000);
    await optionPersonDel.click();

    await browser.close();
   }, 1000000);
  