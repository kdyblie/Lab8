# Lab8_Starter

## Authors
- Kevin Dyblie
- Ethan Lew

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? 
   
   1. Within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, you would not use a unit test to test the "message" as this feature allows a user to write and send a message to another user thus has individual components interacting with each other on a feature level.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, you would use a unit test to test the "max message length" feature of a messaging application as this is just an individual component of a "message" feature.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    If "headless" was set to true the tests would be run without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    router.setState('settings', false, null);

