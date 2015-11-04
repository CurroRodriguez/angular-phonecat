'use strict';

module.exports = function() {
	
	this.Given('a number $n', function(n) {
	    this.initialNumber = parseInt(n);
	});

	this.When('we add number $n', function(n) {
	    this.result = this.initialNumber + parseInt(n);
	});
	
	this.Then('the result is $result', function (result) {
	    var expected_result = parseInt(result);
	    if(this.result != expected_result)
	    {
	        throw new Error()
	    }
	});
}