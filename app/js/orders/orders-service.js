'use strict';

orders.service('DpOrdersService', [
  '$http', 'DP_ORDERS',
  function($http, DP_ORDERS) {

    var obj = this;    
    
    obj.model = {
      products: {},
      productsView: {},
      orders : []
    };

    obj.getOrder = function(id) {
      $http.get(DP_ORDERS.resurces.getOrders + id + '.json').then(function(ret) {
        obj.model.orders.push(ret.data);
      });
    };

    obj.pushOrder = function(order) {
      if (!order.id) {
        order.id = obj.model.orders.length+1;
      }
      obj.model.orders.push(order);
    };

    // private 
    var _getProducts = function() {
      $http.get(DP_ORDERS.resurces.getProducts).then(function(ret) {
        obj.model.products = ret.data;
        angular.forEach(ret.data, function(value, key){
          obj.model.productsView[value.code] = value.name;
        });
      });
    };
    //get products
    _getProducts();

    return obj;
  }
]);
