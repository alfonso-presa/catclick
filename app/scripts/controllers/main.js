'use strict';

/**
 * @ngdoc function
 * @name styleSageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the styleSageApp
 */
angular.module('styleSageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.counter = 0;
    $scope.inc = function () {
      $scope.counter++;
    };
  });
