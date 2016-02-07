angular.module('sampleApp').filter('lowerCaseConverter',function() {

	return function(val){

		return angular.lowercase(val);
	}
})