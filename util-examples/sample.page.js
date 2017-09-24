/** Stateless prototype object required for all pages **/
/** The Object.create() method creates a new object with the specified prototype object and properties **/
/** There are many ways you can create JavaScript classes `Object.create()` method is one of them Or even **/
/** you can also create class based style classes and objects in JavaScript using ES6 syntax. below are few examples **/


//using JavaScript native Object.create()

function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path); //eslint-disable-line prefer-template
};

module.exports = new Page();

//Or, using ES6 class - similar to Java language:

"use strict";

class Page {
	constructor() {
		this.title = 'My Page';  // just an example
	}
	open(path) {
		browser.url('/' + path);
	}
}
export default new Page();
