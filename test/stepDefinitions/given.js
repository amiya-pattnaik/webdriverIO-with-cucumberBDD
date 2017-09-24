
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/ta-login.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo serch feature
  Given(/^I am on the search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');
  });

  // *** belongs to ta-loging  feature
  Given(/^I am on the phptravels page$/, function() {
    loginPage.open();     // navigating to login page
  });

});
