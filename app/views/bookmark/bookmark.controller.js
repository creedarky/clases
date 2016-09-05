(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('BookmarkController', BookmarkController);

  function BookmarkController(bookmark, $state) {
    this.bookmark = bookmark;
    this.cancelEditing = function () {
      $state.go('main');
    }
  }
})();
