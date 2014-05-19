'use strict';

// orders module
var orders = angular.module('dpOrders', []);

// GLOBAL SETINGS FOR ORDERS
orders.value('DP_ORDERS', {
  templates: {
    dpOrdersListDirective: 'js/orders/orders-list-directive.tpl.html'
  },
  resurces: {
    getOrders: 'resources/orders/',
    getProducts: 'resources/products.json'
  }
});
