import { Then }     from 'cucumber';
import landingPage  from '../pageobjects/herokuapp-landing.page';
import yahooPage    from '../pageobjects/yahoo-search.page';

Then(/^I should see a list of search results$/, function () {
  yahooPage.isSearched().should.be.true;
});

// *** belongs to ta-loging  feature
Then(/^I should see the message "([^"]*)" on the landing page$/, function (message) {
  landingPage.getMessage().should.equal(message);
});
