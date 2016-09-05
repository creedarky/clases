(function () {
  'use strict';
  angular.module('app', [
    'ui.router',
    'app.services',
    'app.factories',
    'app.views',
    'app.directives'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('about', {
          url: '/about',
          template: '<h1> About page </h1>'
        })
        .state('404', {
          url: '/404',
          template: '<h1>Not found page </h1>'
        })
      ;
      $urlRouterProvider.otherwise('/404');
    });


})();
