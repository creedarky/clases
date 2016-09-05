(function () {
  'use strict';
  angular.module('app.views.bookmark')
    .config(config);


  function config($stateProvider) {
    $stateProvider.state('bookmark', {
      url: '/bookmark/:id',
      templateUrl: 'app/views/bookmark/bookmark.template.html',
      controller: 'BookmarkController',
      controllerAs: 'bookmark',
      resolve: {
        bookmark: function($stateParams, bookmarkFactory) {
          return bookmarkFactory.findBookmark(+$stateParams.id);
        }
      }
    })
  }
})();
