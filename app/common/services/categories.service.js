export default class CategoryService {
  constructor() {
    this._categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];
  }

  getCategories() {
    return this._categories;
  }
}

