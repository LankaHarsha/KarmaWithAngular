describe('This is test suite',function() {

	var scope, sampleController;
	beforeEach(function() {

		module('sampleApp');
		inject(function($rootScope,$controller) {

			scope = $rootScope.$new(); //creating our empty scope as a child of $rootScope
			
			//Instantiating the controller and assigning controllers $scope service to our empty scope
			sampleController = $controller('sampleController', {
				
				$scope :scope
			});
		})
	})
	it('This is Test Case', function() {

		expect(sampleController).toBeDefined();
	})
	it("This is test Case-2", function() {

		expect(scope.add(2,3)).toBe(5);
	})
});