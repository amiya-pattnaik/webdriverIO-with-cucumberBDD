
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/ta-login.page';

defineSupportCode(function({ When }) {
  // *** belongs to Yahoo serch feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    yahooPage.search();
  });

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });


});
