'use strict';

// customer module
var customer = angular.module('dpCustomer', []);

// GLOBAL SETINGS FOR CUSTOMER
customer.value('DP_CUSTOMER', {
  resurces: {
    getCustomer: 'resources/customer.json'
  }
});
