var greetingControllers = angular.module('greetingControllers', []);

greetingControllers.controller('GreetingCtrl', ['$scope',
  function ($scope) {
	
    $scope.greetings = 'Hello Head Hunter'
    	 console.log("Controller is succefull");
 
  }]);
