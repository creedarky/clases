import config from './main.config';
import FakeController from './fake.controller'
import template from './main.template.html';
import MainController from './main.controller'

export default angular.module('app.components.main', [])
  .config(config)
  .controller('FakeController', FakeController)
  .component('main', {
    template,
    controller: MainController,
    controllerAs: 'main'
  })
  .name;
