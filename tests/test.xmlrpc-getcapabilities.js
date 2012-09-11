define(['xmlrpc-getcapabilities/xmlrpc-getcapabilities',
        'chai'],
function(getCapabilities, chai) {
  var expect = chai.expect;

  describe("xmlrpc-getcapabilities", function() {
    
    it('shoud export service setup function', function() {
      expect(getCapabilities).to.exist;
      expect(getCapabilities).to.be.a('function');
    });
    
    describe("setup function", function() {
      var service = getCapabilities();
      
      it('shoud return service object', function() {
        expect(service).to.be.an.instanceOf(Object);
      });
      
      it('shoud return service with getCapabilities function', function() {
        expect(service.getCapabilities).to.exist;
        expect(service.getCapabilities).to.be.a('function');
      });
    });
    
  });
  
  return { name: "test.xmlrpc-getcapabilities" }
});
