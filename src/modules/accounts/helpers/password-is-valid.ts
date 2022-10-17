export class PasswordIsValid {
  validate(password: string) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (passwordRegex.test(password)) {
      return true;
    } else if (password.length <= 8) {
      return false;
    } else if (password.length >= 20) {
      return false;
    }
  }
}
