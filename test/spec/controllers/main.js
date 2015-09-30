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

  it('should increment the cat`s counter when inc is called', function () {
    expect(scope.cats[0].counter).toBe(0);
    scope.inc(scope.cats[0]);
    expect(scope.cats[0].counter).toBe(1);
  });
});
