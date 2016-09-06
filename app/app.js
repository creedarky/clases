import angular from 'angular';
import uiRouter from 'angular-ui-router';
import services from './common/services';
import directives from './common/directives';
import components from './components';
import rootTemplate from './app.template.html';

import './css/animations.css';
import './css/eggly.css';
import './css/normalize.css';

angular.module('app', [
  uiRouter,
  services,
  directives,
  components
])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .component('root', {
    template: rootTemplate
  });


