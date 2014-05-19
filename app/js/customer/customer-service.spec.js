'use strict';

describe('module: dpCustomer | service: DpCustomerService', function() {

    beforeEach(module('dpCustomer'));

    var DpCustomerService,
        $httpBackend,
        DP_CUSTOMER;

    beforeEach(inject(function(_DpCustomerService_, _$httpBackend_, _DP_CUSTOMER_) {
        DpCustomerService = _DpCustomerService_;
        $httpBackend = _$httpBackend_;
        DP_CUSTOMER = _DP_CUSTOMER_;
    }));

  it('should exist', inject(function() {
    expect(DP_CUSTOMER).toBeDefined();
    expect(DpCustomerService).toBeDefined();
  }));
  
});
