export default class BookmarkController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit() {
    console.log(this);
  }

  cancelEditing() {
    this.$state.go('main');
  }
}
