export class CategoryExistsError extends Error {
  constructor(categoryName: string) {
    super();
    this.name = `CategoryExistsError: ${categoryName}`;
  }
}
