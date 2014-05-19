'use strict';

orders.directive('dpOrdersList', [
  'DP_ORDERS', 'DpOrdersService',
  function(DP_ORDERS, DpOrdersService) {
    
    //TODO: create a helper for commpon order directive
    var obj = {};
    obj.replace = true;
    obj.restrict = 'A';
    //isolate scope
    obj.scope = {
      ordersId: '='
    };
    obj.templateUrl = DP_ORDERS.templates.dpOrdersListDirective;
    obj.link = function(scope, element, attrs) {
      
      scope.$watch('ordersId', function(newVal, oldVal){
        if (newVal) {
          //load orders for that user
          angular.forEach(newVal, function(value, key){
            DpOrdersService.getOrder(value);
          });
        }
      });

      scope.model = DpOrdersService.model;
      scope.model.newOrder = false;

      scope.showOrder = function(order) {
        scope.model.currentOrder = order;
      };
      
      scope.newOrder = function() {
        scope.model.newOrder = true;
        scope.model.currentOrder =  {
          products : []
        };
      };

      scope.saveOrder = function() {
        // if not empty push
        if (scope.model.currentOrder.products.length>0) {
          // push to service
          DpOrdersService.pushOrder(scope.model.currentOrder);
        }
        scope.model.newOrder = false;
        scope.model.currentOrder = null;
      };
      scope.addProduct = function(code) {
        scope.model.currentOrder.products.push(code);
      };

    };
    // Return the directive configuration.
    return obj;
  }
]);
