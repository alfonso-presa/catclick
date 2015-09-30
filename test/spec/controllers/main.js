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

  it('should select a  cat', function () {
    expect(scope.cat).toBe(scope.cats[0]);
    scope.select(scope.cats[1]);
    expect(scope.cat).toBe(scope.cats[1]);
  });


  it('should increment the selected cat`s counter when inc is called', function () {
    expect(scope.cats[0].counter).toBe(0);
    scope.inc();
    expect(scope.cats[0].counter).toBe(1);
  });
});
