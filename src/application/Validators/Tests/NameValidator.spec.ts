import { NameValidator } from "../NameValidator";


describe('name validation test', () => {

  test('should return true to a valid name', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate('Gabriel')).toBe(true)
  })

  test('should return true to a valid name with max. characters', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate('GabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'Gab')).toBe(true)
  })

  test('should return true to a valid name with min. characters', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate('Gab')).toBe(true)
  })

  test('should return false to a invalid name with lesser than min. characters', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate('Ga')).toBe(false)
  })

  test('should return false to a invalid name with more than max. characters', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate('GabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'GabrielGabrielGabrielGabrielGabrielGabrielGabrielGabriel'
    + 'Gabr')).toBe(false)
  })

  test('should return false to a undefined name', async () => {
    const nameValidator = new NameValidator()
    expect(nameValidator.validate(undefined)).toBe(false)
  })
})