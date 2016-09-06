import angular from 'angular';
import controller from './bookmark.controller';
import config from './bookmark.config';
import template from './bookmark.template.html';

export default angular.module('app.components.bookmark', [])
  .config(config)
  .component('bookmark', {
    template,
    controller,
    controllerAs: 'bookmark',
    bindings: {
      bookmark: '<'
    }
  })
  .name;
