'use strict';

customer.controller('DpCustomerController', [
  '$scope', 'DpCustomerService',  
  function($scope, DpCustomerService) {
    $scope.model = DpCustomerService.model;
  }
]);
