import angular from 'angular';
import CategoryService from './categories.service';
import BookmarkService from './Bookmark.service';

export default angular.module('app.services', [])
  .service('CategoryService', CategoryService)
  .service('BookmarkService', BookmarkService)
  .name;

