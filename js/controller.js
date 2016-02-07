angular.module('sampleApp').controller('sampleController', function($scope) {

	$scope.add = function(a, b) {

		return a + b;
	}

	$scope.subtract = function(a, b) {

		return a-b;
	}
})