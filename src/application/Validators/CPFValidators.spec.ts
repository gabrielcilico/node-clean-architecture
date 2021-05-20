import { CPFValidator } from './CPFValidator'

describe('cpf validation test', () => {

  test('should return true to a valid cpf', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('39627574902')).toBe(true)
  })

  test('should return true to a valid formatted cpf', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('396.275.749-02')).toBe(true)
  })

  test('should return false to a invalid cpf', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('00000000002')).toBe(false)
  })

  test('should return false to a invalid formatted cpf', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('000.000.000-02')).toBe(false)
  })

  test('should return false for a cpf with less than 11 characters', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('000000000')).toBe(false)
  })

  test('should return false for a cpf with more than 11 characters', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate('00000000000000')).toBe(false)
  })

  test('should return false for a undefined cpf', async () => {
    const cpfValidator = new CPFValidator()
    expect(cpfValidator.validate(undefined)).toBe(false)
  })
});
