'use strict';

describe('Service: Collectionfactory', function () {

  // load the service's module
  beforeEach(module('collectionsApp'));

  // instantiate service
  var Collectionfactory;
  beforeEach(inject(function (_Collectionfactory_) {
    Collectionfactory = _Collectionfactory_;
  }));

  it('should do something', function () {
    expect(!!Collectionfactory).toBe(true);
  });

});
