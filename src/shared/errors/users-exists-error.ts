export class EmailExistsError extends Error {
  constructor(email: string) {
    super();
    this.name = `EmailExistsError: ${email}`;
  }
}
