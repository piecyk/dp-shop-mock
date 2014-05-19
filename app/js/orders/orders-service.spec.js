'use strict';

describe('module: dpOrders | service: DpOrdersService', function() {

    beforeEach(module('dpOrders'));

    var DpOrdersService,
        $httpBackend,
        DP_ORDERS;

    beforeEach(inject(function(_DpOrdersService_, _$httpBackend_, _DP_ORDERS_) {
        DpOrdersService = _DpOrdersService_;
        $httpBackend = _$httpBackend_;
        DP_ORDERS = _DP_ORDERS_;
    }));

  it('should exist', inject(function() {
    expect(DP_ORDERS).toBeDefined();
    expect(DpOrdersService).toBeDefined();
  }));
  
});
