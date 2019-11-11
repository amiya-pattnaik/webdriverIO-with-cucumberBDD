
import Page from './page';

class YahooPage extends Page  {
  /**
  * define elements
  */
  get searchInput()   { return $('#yschsp'); }
  get searchButton()  { return $('.mag-glass'); }
  get resultsList()   { return $('#results'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://search.yahoo.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }
}

export default new YahooPage();
