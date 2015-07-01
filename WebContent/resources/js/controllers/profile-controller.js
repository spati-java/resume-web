var profileControllers = angular.module('profileController', []);

profileControllers.controller('ProfileCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/resume-model/webapi/hello').success(function(data) {
      $scope.profile = data;
      console.log(data);
    });

    $scope.orderProp = 'age';
    console.log("profile controller is succefull");
  }]);

