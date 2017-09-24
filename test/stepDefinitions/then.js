
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import myAccount from '../pageobjects/ta-myaccount.page';

defineSupportCode(function({ Then }) {
  // *** belongs to Yahoo serch feature
  Then(/^I should see a list of search results$/, function() {
    yahooPage.isSearched().should.be.true;
  });

  // *** belongs to ta-loging  feature
  Then(/^I should see the message "([^"]*)" on my account page$/, function(message) {
    myAccount.getUserInfo().should.equal(message);
  });

});
