(function () {
  'use strict';
  angular.module('app.views.main')
    .config(config);


  function config($stateProvider) {
    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/views/main/main.template.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
  }
})();
