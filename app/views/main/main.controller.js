(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('MainController', MainController);

  MainController.$inject = ['categoryService', 'bookmarkFactory', '$timeout']

  function MainController(categoryService, bookmarkFactory, $timeout) {
    var vm = this;

    vm.currentCategory = null;

    vm.isCurrentCategory = isCurrentCategory;
    vm.setCurrentCategory = setCurrentCategory;

    activate();

    function activate() {
      vm.categories = categoryService.getCategories();
      vm.bookmarks = bookmarkFactory.getBookmarks();

    }

    function isCurrentCategory(category) {
      return vm.currentCategory !== null && category.name === vm.currentCategory.name;
    }

    function setCurrentCategory(category) {
      vm.currentCategory = category;
      $timeout(function() {
        console.log(this, vm, this === vm);
      }, 0)
    }
  }
})();
