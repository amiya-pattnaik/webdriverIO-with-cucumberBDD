import {Given, When, Then} from 'cucumber';
import loginPage from '../pageobjects/herokuapp-login.page';
import yahooPage from '../pageobjects/yahoo-search.page';


When(/^I enter "([^"]*)" into the search box$/, function (arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
});

When(/^I click the search button$/, function () {
    yahooPage.search();
});

// *** belongs to ta-loging  feature
When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});
