import Page from './page';
import utl   from '../../utilities/common-utilities';

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('div.form-group:nth-child(1) > input:nth-child(3)'); }
    get passwordInput()   { return $('.panel-body > div:nth-child(2) > input:nth-child(3)'); }
    get loginButton()     { return $('//button[contains(., "Login")]'); }
    get headerImage()     { return $('//img[@alt=\"Login\"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.headerImage.isDisplayed()){
        this.headerImage.waitForDisplayed(10000);
      }
    }

    login (username, password) {
      //this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
}

export default new LoginPage()
