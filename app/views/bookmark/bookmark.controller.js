(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('BookmarkController', BookmarkController);

  function BookmarkController(bookmark, $state) {
    var vm = this;

    vm.bookmark = bookmark;
    vm.cancelEditing = function () {
      $state.go('main');
    }
  }
})();
