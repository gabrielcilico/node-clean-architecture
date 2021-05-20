import { CNPJValidator } from "../CNPJValidator"

function getValidator() {
  return new CNPJValidator()
}

describe('cnpj validation test', () => {

  test('should return true to a valid formatted cnpj', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('77.303.961/0001-08')).toBe(true)
  })

  test('should return true to a valid cnpj', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('77303961000108')).toBe(true)
  })
  
  test('should return false to a invalid formatted cnpj', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('77.303.961/0001-04')).toBe(false)
  })

  test('should return false to a invalid cnpj', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('77303961000104')).toBe(false)
  })

  test('should return false to a invalid cnpj with lesser than 14 characters', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('773039610001')).toBe(false)
  })

  test('should return false to a invalid cnpj with more than 14 characters', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate('7730396100010819')).toBe(false)
  })

  test('should return false to a undefined cnpj', async () => {
    const cnpjValidator = getValidator()
    expect(cnpjValidator.validate(undefined)).toBe(false)
  })
})