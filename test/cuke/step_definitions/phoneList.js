'use strict';

var assert = require('assert');

module.exports = function () {
    
    this.Given('we are at the phone list page', function (callback) {
        this.browser.get('http://localhost:8000/app/index.html');
        callback();
    });
    
    
    this.When('I enter "$searchTxt" in the search box', function(searchTxt, callback) {
        var query = this.browser.element(this.By.model('query'));
        query.sendKeys(searchTxt).then(function() {
            callback();
        });
    });


    this.Then('all the phones are displayed', function (callback) {
        this.browser.element.all(this.By.repeater('phone in phones')).count().then(function(count){
            assert.equal(3, count);
            callback();
        });        
    });
        
    this.Then('$count phones are listed', function(count, callback) {
        this.browser.element.all(this.By.repeater('phone in phones')).count().then(function(actual){
            var expected = parseInt(count);
            assert.equal(expected, actual);
            callback();
        }); 
        
    });
    
    
    
}