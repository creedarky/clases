(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('FakeController', FakeController);

  function FakeController() {
    var vm = this;
    vm.bookmarks = [1, 2, 3, 4, 5, 6, 7];
  }
})();
