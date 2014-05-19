'use strict';

// main app
angular.module('myApp', [
  'ngRoute',

  'dpCustomer',
  'dpOrders'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {templateUrl: 'js/app-view.tpl.html', controller: 'AppController'});

  // if wrong url go back to welcome
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
