import { IValidator } from "./IValidator";

export class NameValidator implements IValidator {

  validate(name: string): boolean {
    return name != undefined && name.trim().length > 2 && name.trim().length <= 255
  }
}