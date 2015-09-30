'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('styleSageApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should increment counter when inc is called', function () {
    expect(scope.counter).toBe(0);
    scope.inc();
    expect(scope.counter).toBe(1);
  });
});
