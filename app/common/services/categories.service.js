angular.module('app.services')
  .service('categoryService', categoryService);

function categoryService() {
  var categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Exercise"},
    {"id": 3, "name": "Humor"}
  ];

  this.getCategories = getCategories;

  function getCategories() {
    return categories;
  }


}
