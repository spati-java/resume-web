var phonecatApp = angular.module('resumeApp', [
  'ngRoute',
  'phonecatControllers','greetingControllers'
]);

phonecatApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                         when('/greetings', {
                            templateUrl: 'greeting.html',
                            controller: 'GreetingCtrl'
                          }).
                          when('/phones', {
                              templateUrl: 'phone-list.html',
                              controller: 'PhoneListCtrl'
                            }).
                        otherwise({
                          redirectTo: '/greetings'
                        });
                    }]);