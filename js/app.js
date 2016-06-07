var app = angular.module("myApp", []);
		app.controller("myController", function($scope) {
			$scope.submitForm = function(isValid) {
				if (isValid) {
					$(".word-input").hide();
					$(".text").show();
				}
			};

});