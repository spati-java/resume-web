var profileControllers = angular.module('profileController', []);

profileControllers.controller('ProfileCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://localhost:8080/resume-model/webapi/hello').success(function(data) {
      $scope.phones = data;
      console.log(data);
    });

    $scope.orderProp = 'age';
  }]);

