/* global angular */
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
    $scope.cats = localStorage.cats ? JSON.parse(localStorage.cats) : [
      {name:'Frodo', img: '/images/gato.jpg', counter: 0},
      {name:'Bilbo', img: '/images/gato2.jpg', counter: 0},
      {name:'Garfield', img: '/images/gato2.jpg', counter: 0},
      {name:'Botas', img: '/images/gato2.jpg', counter: 0},
      {name:'Duma', img: '/images/gato2.jpg', counter: 0}
    ];
    $scope.cat = $scope.cats[0];
    $scope.inc = function () {
      $scope.cat.counter++;
    };
    $scope.select = function (cat) {
      $scope.cat = cat;
    };
    $scope.openAdmin = function () {
      $scope.admin = true;
      $scope.editCat = angular.extend({},$scope.cat);
    };
    $scope.save = function () {
      $scope.admin = false;
      $scope.cat.name = $scope.editCat.name;
      $scope.cat.img = $scope.editCat.img;
      $scope.cat.counter = $scope.editCat.counter;
      localStorage.cats = JSON.stringify($scope.cats);
    };
    $scope.cancel = function () {
      $scope.admin = false;
    };
  });
