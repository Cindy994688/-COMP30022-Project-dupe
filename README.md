# COMP30022-Project: Eportfolio by Potato Powered Portfolios

## Introduction
This is an Eportfolio website created by Potato Powered Portfolios, for the group CRXMM. It was created for
the subject of "IT Project" (COMP30022) at the University of Melbourne.

## Aim
Create an Eportfolio site that displays and celebrates the biographies, achievements and experiences of the
individuals of CRXMM, whilst also displaying their group project, "Beth Beauty Care".


## Usage
#This Eportfolio runs off the MERN stack.
#It is used to showcase your personal achievements and as a personal advertisment to potential employers. 



## Important information if you wish to edit the portfolio
#To run locally, open a command line, cd into the root of this project and run the command "npm run local" 
#To change what email account emails sent through the contact form will go to, adjust line 33 of contact.js 
with your email (in the routes folder). 
#we have made an api for you to add your personal projects through. Simply navigate to the login button, enter
the credentials we gave you and follow the prompt
#To edit any of the pictures on display, first identify the name of the picture you want to replace. Rename your 
new photo so it has this same name, then place the file photoUploader.js (currently in the root of the project) 
in the same folder as the new photo. Change lines 14, 15 and 18 so they say the photo name and then save and run 
the photo uploader by typing "node photoUploader". Your new photo should now display on the website :)
#any edits to the current display will require you to navigate to the react folder, then src, then pages. 
HomePage.js stores the overall structure of the user interface, and the rest of the front end components are in 
this folder as well.



## API
Please refer to "API Documentation"



## Configuration

Please follow the below steps to perform your first time local configuration of this program. To run your ePortfolio you will
need to have created your own mongoDB atlas account and have a gmail account ready to connect. There are details on how to configure 
these accounts will follow the init guide. 

- mongoDB Atlas settings:

- 1. Install node modules and dependencies

$ cd COMP30022-Project
$ npm install --save

or shorthand

$ npm i --save

Depending on your internet connection this step can take a while, some of the testing libaries are comparitively large. You may continue with the below steps while this is completing. 
If you have a large amount of npm warnings, use the below command to fix the vunerabilities.

$ npm audit fix


- 2. Configuring mongoDB Atlas

a. Whilelisting
Log into your mongoDB atlas account and navigate to "Network Access"
While you are in here ensure that you have the ip address that you are serving the application from, the ip that you will be local testing from 
should be added as well. If the hosting provider you have chosen uses variable ip addresses you can define a range here. 

b. Database User setup
Double check that you have a database account and that it has admin capacity. Make sure to note down the uername of your account.

- 3. Create .env files

For your local testing to work you will need to create environment files with the name '.env' in your root directory and 
in the /react folder


The env in the root directory stores credentials for associated accounts
/.env => {
    DB_PASSWORD=<<mongoDB password>>
    DB_USERNAME=<<mongoDB username>>
    DB_NAME=<<mongoDB database-name>>
    EMAIL_PASSWORD=<<gmail password>>
    EMAIL=<<email address>>
}    

/react/.env = {
    SKIP_PREFLIGHT_CHECK=true
}

## Deployment 

You can use whatever deployment platform you desire, however this project has been developed and tested using Heroku, a popular PAAS with an
attracive free tier. This guide is for heroku although the steps can be applied to any hosting service.

1. Connect your github fork or repo to your hosting platform. 

For Heroku you can find these settings under the 'Development' tag. If you are modifying the original code for your own purposes you should consider using automatic deploys.

2. Set configuration variables

If you are using Heroku navigate to the settings section of your homepage, reaveal the configuration variables. From here one by one add the variables below, without these the database access and contact form will not work. 

    DB_PASSWORD=<<mongoDB password>>
    DB_USERNAME=<<mongoDB username>>
    DB_NAME=<<mongoDB database-name>>
    EMAIL_PASSWORD=<<gmail password>>
    EMAIL=<<email address>>
    SKIP_PREFLIGHT_CHECK=true
    IS_HEROKU=1

If you are not using Heroku instead look for the configuration variables section and set the above variables. 

## Testing

Through general use or further development of our e-Portfolio system you will probably want to test the platform. We have implemented two classes of test, which will be disucessed below.

1. Snapshot test

The command to run a snapshot test is

$ npm test

As snapshot tests are the most efficient tests, and have a good coverage of the functionality of the website. The testing uses jest's snapshot fuctionality and react's test renderer. They have a good coverage of the sites functionality and so is implemented as the default test suite.  

2. End to End Test (E2E)

The secondary test suite is comprosed of End to End tests that utilize puppeteer, a headless browser which simulates user interaction with the site. This suite is run with the below command. 

$ npm run e2e

The strength of these tests is that they can simulate the user experience, and given some tweaking in the code can be run with the browser open to visualise the tests running. 
This project is licensed under the terms of the MIT license.
