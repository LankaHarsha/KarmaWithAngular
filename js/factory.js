angular.module('sampleApp').factory('dateFactory',function() {

	var factory = {};
	factory.getCurrentYear = function() {

		var year = new Date().getFullYear();
		return year;
	}
	return factory;
})