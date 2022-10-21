export class MissingParamError extends Error {
  constructor(paramName: string) {
    super();
    this.name = `Missing param: ${paramName}`;
  }
}
