import Page from './page'

class ContactUS extends Page {

    /**
    * define elements
    */

    get contactUsText ()     { return $('//div/h3[contains(., "Contact Us")]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('contact-us')       //this will append `contact-us` to the baseUrl to form complete URL
        browser.pause(2000);
    }

    waitForContactPageToLoad () {
      if(!this.contactUsText.isDisplayed()){
        this.contactUsText.waitForDisplayed(3000);
      }
    }

    getPageTitle(){
      return this.contactUsText.getText();
    }
}

export default new ContactUS()
