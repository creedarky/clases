angular.module('app.views.main')
  .controller('FakeController', FakeController);

function FakeController() {
  this.bookmarks = [1, 2, 3, 4, 5, 6, 7];
}
