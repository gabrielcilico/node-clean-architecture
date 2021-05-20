import { IValidator } from "./IValidator";

export class CNPJValidator implements IValidator {

  validate(cnpj: string): boolean {
    if (!cnpj) {
      return false
    }

    cnpj = cnpj.trim().split(/[./-]/).join('');

    if (cnpj.length != 14) {
      return false
    }

    return this.getRealCNPJ(cnpj) === cnpj
  }

  private getRealCNPJ(cnpj: string): string {
    let numbersToTest: string[] = cnpj.substr(0,12).split('')
    numbersToTest.push(this.getDigit(numbersToTest))
    numbersToTest.push(this.getDigit(numbersToTest))

    return numbersToTest.join('')
  }

  private getDigit(numbers: string[]): string {
    let sum: number = 0 
    let digits: number[] = [5,4,3,2,9,8,7,6,5,4,3,2]
    if (numbers.length > 12) {
      digits.unshift(6)
    }

    for (let x: number = 0; x < numbers.length; x++) {
      let digit: number = +numbers[x]
      sum +=  digits[x] * digit
    }

    let digit: number = sum % 11
    return String(digit < 2 ? 0 : (11 - digit))
  }
}