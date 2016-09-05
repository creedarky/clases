(function () {
  'use strict';
  angular.module('app.views.main')
    .controller('MainController', MainController);

  function MainController(categoryService, bookmarkFactory) {
    this.categories = categoryService.getCategories();

    this.bookmarks = bookmarkFactory.getBookmarks();

    this.isCurrentCategory = isCurrentCategory;
    this.setCurrentCategory = setCurrentCategory;
    this.currentCategory = null;

    function isCurrentCategory(category) {
      return this.currentCategory !== null && category.name === this.currentCategory.name;
    }

    function setCurrentCategory(category) {
      this.currentCategory = category;
    }
  }
})();
