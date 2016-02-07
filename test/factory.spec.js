describe("Test suite for factory", function() {
	
	var dFactory;
	beforeEach(function() {

		module('sampleApp');
		inject(function(_dateFactory_){

			dFactory = _dateFactory_;
		});
	});
	it('Sample Test Case', function() {

		expect(dFactory).toBeDefined();
	});
	it('Method in factory', function() {

		expect(dFactory.getCurrentYear()).toBe(2015);
	})
})