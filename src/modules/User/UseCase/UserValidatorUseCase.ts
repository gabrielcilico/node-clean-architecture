import { IValidator } from "../../../application/Validators/IValidator";
import { User } from "../Domain/User";

export class UserValidatorUseCase implements IValidator {

  emailValidator: IValidator;

  contruct(emailValidator: IValidator) {
    this.emailValidator = emailValidator
  }

  validate(user: User): boolean {
    if (!this.emailValidator.validate(user.email)) {
      return false;
    }
  }

}