var resumeApp = angular.module('resumeApp', [
  'ngRoute',
  'profileController','greetingControllers'
]);

resumeApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                         when('/greetings', {
                            templateUrl: 'greeting.html',
                            controller: 'GreetingCtrl'
                          }).
                          when('/profile', {
                              templateUrl: 'profile.html',
                              controller: 'ProfileCtrl'
                            }).
                        otherwise({
                          redirectTo: '/greetings'
                        });
                    }]);