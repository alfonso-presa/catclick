'use strict';

/**
 * @ngdoc overview
 * @name styleSageApp
 * @description
 * # styleSageApp
 *
 * Main module of the application.
 */
angular
  .module('styleSageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
