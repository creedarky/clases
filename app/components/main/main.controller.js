export default class MainController {

  constructor(CategoryService, BookmarkService) {
    this.categoryService = CategoryService;
    this.bookmarkService = BookmarkService;
  }

  $onInit() {
    this.currentCategory = null;
    this.categories = this.categoryService.getCategories();
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  isCurrentCategory(category) {
    return this.currentCategory !== null && category.name === this.currentCategory.name;
  }

  setCurrentCategory(category) {
    this.currentCategory = category;
  }
}
