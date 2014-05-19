'use strict';

customer.service('DpCustomerService', [
  '$http', 'DP_CUSTOMER',
  function($http, DP_CUSTOMER) {

    var obj = this;
    
    // model of customer
    obj.model = {
      name: null,
      orders: null
    };

    obj.getCustomers = function(id) {
      id = id || 0;
      //store the promise
      obj.model.promise = $http.get(DP_CUSTOMER.resurces.getCustomer).then(function(ret) {
        // get data for id
        obj.model.name = ret.data[id].name;
        obj.model.orders = ret.data[id].orders;
      });
    };
    
    return obj;
  }
]);
