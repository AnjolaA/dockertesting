const expect = require('chai').expect;



module.exports = function () {

  this.Given(/^I go to the website "([^"]*)"$/, (url) => {
  browser.windowHandleMaximize(["current"]);
  //browser.options.baseUrl;
  browser.url(url);
  browser.pause(2000);
  });


  this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });

}
