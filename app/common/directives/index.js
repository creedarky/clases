import angular from 'angular';
import myCurrentTime from './my-current-time.directive';
import testDirective from './test.directive';

export default angular.module('app.directives', [])
  .directive('myCurrentTime', myCurrentTime)
  .directive('testDirective', testDirective)
  .name;
