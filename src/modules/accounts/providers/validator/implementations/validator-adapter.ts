import validator from "validator";

export class ValidatorEmailAdapter {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
