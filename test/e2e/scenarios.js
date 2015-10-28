'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
  
  describe('Phone List View', function() {
    
    beforeEach(function() {
      browser.get('app/index.html');
    })
    
    it('should filter the phone list as aer types into the search box', function() {
      
      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));
      
      expect(phoneList.count()).toBe(3);
      
      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(2);
      
      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(1);
    });
  });
});
