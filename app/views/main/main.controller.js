(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('MainController', MainController);

  function MainController(categoryService, bookmarkFactory, $timeout) {
    var vm = this;
    vm.categories = categoryService.getCategories();

    vm.bookmarks = bookmarkFactory.getBookmarks();

    vm.isCurrentCategory = isCurrentCategory;
    vm.setCurrentCategory = setCurrentCategory;
    vm.currentCategory = null;

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
