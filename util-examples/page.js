/** Stateless prototype object required for all pages **/

function Page () { //eslint-disable-line require-jsdoc
}

Page.prototype.open = function (path) {
    browser.url('/' + path); //eslint-disable-line prefer-template
};

module.exports = new Page();

//Or, using ES6 class - similar to Java language:
/*
"use strict";

class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
		browser.url('/' + path);
	}
}
module.exports = Page;
*/
