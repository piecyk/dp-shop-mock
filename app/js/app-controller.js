'use strict';

angular.module('myApp')
  .controller('AppController', [
    '$scope', 'DpCustomerService',  
    function($scope, DpCustomerService) {

      //init state
      DpCustomerService.getCustomers();
    }
  ]);
