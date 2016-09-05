(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('BookmarkController', BookmarkController);

  BookmarkController.$inkect = ['bookmark', '$state'];
  function BookmarkController(bookmark, $state) {
    var vm = this;

    vm.bookmark = bookmark;
    vm.cancelEditing = function () {
      $state.go('main');
    }
  }
})();
