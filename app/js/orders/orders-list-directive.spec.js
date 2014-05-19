'use strict';

describe('module: dpOrders | directive: dpOrdersList', function() {

  beforeEach(module('dpOrders'));

  describe("template", function () {
    var $compile,
        $scope,
        $httpBackend,
        DP_ORDERS,
        directive = '<div orders-id="model.orders" dp-orders-list></div>';
    
    // Angular strips the underscores when injecting
    beforeEach(inject(function(_$compile_, _$rootScope_, _DP_ORDERS_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
      DP_ORDERS = _DP_ORDERS_;
      dump('app/'+DP_ORDERS.resurces.getProducts);
      // backend definition common for all tests
      $httpBackend.when("GET", 'app/'+DP_ORDERS.resurces.getProducts)
        .respond({});
    }));

    it('should exist', inject(function() {
      expect(DP_ORDERS).toBeDefined();
    }));

    it("should render the the directive as passed in by $scope",
        inject(function() {
          var template = $compile(directive)($scope);
          $httpBackend.flush();
          $scope.model = {
            orders: [1]
          };
          $scope.$digest();
          var templateAsHtml = template.html();
          dump(templateAsHtml);
        }));  
  });
});
