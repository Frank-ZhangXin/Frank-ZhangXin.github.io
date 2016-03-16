var app = angular.module('my_angular_app', []);

app.controller('submit_controller', function($scope){
	$scope.isUserLoggedIn = false;
	// Should verify user credential downbelow
	$scope.submit = function(){
		$scope.isUserLoggedIn = true;
	};
});