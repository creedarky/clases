import angular from 'angular';
import MainComponent from './main';
import BookmarkComponent from './bookmark'

export default angular.module('app.components', [MainComponent, BookmarkComponent]).name;
