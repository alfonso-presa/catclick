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
    $scope.cats = [
      {name:"Frodo", img: "/images/gato.jpg", counter: 0},
      {name:"Bilbo", img: "/images/gato2.jpg", counter: 0}
    ];
    $scope.cat = $scope.cats[0];
    $scope.inc = function () {
      $scope.cat.counter++;
    };
    $scope.select = function (cat) {
      $scope.cat = cat;
    };
  });
