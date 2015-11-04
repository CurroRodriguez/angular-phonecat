'use strict';

var assert = require('assert');
var path = require('path');

var protractor = require('protractor');
var webdriver = require('protractor/node_modules/selenium-webdriver');

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(webdriver.Capabilities.firefox()).build();

driver.manage().timeouts().setScriptTimeout(100000);

var ptor = protractor.wrapDriver(driver);

function World() {
    
    this.browser = ptor;
    this.By = protractor.By;
    this.assert = assert;
}


module.exports = function() {
    this.World = World;
}