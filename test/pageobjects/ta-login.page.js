import Page from './page'

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return browser.element('//*[@name="username"]'); }
    get passwordInput()   { return browser.element('//*[@name="password"]'); }
    get rememberMe ()     { return browser.element('//span[contains(., "Remember Me")]'); }
    get loginButton()     { return browser.element('//button[contains(., "Login")]'); }
    get footerImage()     { return browser.element('//*[@class="foot-brand center-block img-responsive"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://www.phptravels.net/login')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.footerImage.isVisible()){
        this.footerImage.waitForVisible(5000);
      }
    }

    login (username, password) {
      this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.rememberMe.click();
      this.loginButton.click();
      browser.pause(2000);
    }
}

export default new LoginPage()
