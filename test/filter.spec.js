describe('Filter Test Suite', function() {

	var filter;
	beforeEach(function() {

		module('sampleApp');
		inject(function($filter) {

			filter = $filter;
		});
	})
	it('Test case -1', function() {

		expect(filter('lowerCaseConverter')).toBeDefined();

	});
	it('Test Case - 2', function() {

		var lowerfun = filter('lowerCaseConverter');
		expect(lowerfun('ABC')).toBe('abc'); 
	})
})