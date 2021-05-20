import { IValidator } from "./IValidator";

export class CPFValidator implements IValidator {

  validate(cpf: string): boolean {
    if (!cpf) {
      return false
    }

    cpf = cpf.trim().split(/[./-]/).join('');

    if (cpf.length != 11) {
      return false
    }

    return this.getRealCPF(cpf) === cpf
  }

  private getRealCPF(cpf: string): string {
    let numbersToTest: string[] = cpf.substr(0,9).split('')
    numbersToTest.push(this.getDigit(numbersToTest))
    numbersToTest.push(this.getDigit(numbersToTest))

    return numbersToTest.join('')
  }

  private getDigit(numbers: string[]): string {
    let sum: number = 0 
    let length: number = numbers.length
    for (let x: number = 0; x < length; x++) {
      let digit: number = +numbers[x]
      sum += (length+1-x) * digit
    }

    let digit: number = (sum * 10) % 11
    return String(digit >= 10 ? 0 : digit)
  }
}