import Page from './page'

class LandingPage extends Page {

    /**
    * define elements
    */

    get accountMessage () { return $('//*[@class="subheader"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://www.phptravels.net/account')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForLandingPageToLoad () {
      if(!this.accountMessage.isDisplayed()){
        this.accountMessage.waitForDisplayed(5000);
      }
    }
    getMessage (){
      return this.accountMessage.getText();
    }
}

export default new LandingPage();
