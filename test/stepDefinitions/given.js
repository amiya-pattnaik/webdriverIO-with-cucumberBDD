import { Given} from 'cucumber';
import loginPage from '../pageobjects/herokuapp-login.page';
import yahooPage from '../pageobjects/yahoo-search.page';


// *** belongs to Yahoo serch feature
Given(/^I am on the search page$/, function () {
  yahooPage.open();
  browser.getTitle().should.equal('Yahoo Search - Web Search');
});

Given('I am on the herokuapp login page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
});
