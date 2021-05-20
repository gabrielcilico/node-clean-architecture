import { EmailValidator } from "../EmailValidator"

describe('email validation test', () => {

  test('should return true to a valid email', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('valid_email@gmail.com')).toBe(true)
  })

  test('should return false to a undefined email', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate(undefined)).toBe(false)
  })

  test('should return false to a email without @', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_emailgmail.com')).toBe(false)
  })

  test('should return false to a email without .com', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email@gmail')).toBe(false)
  })

  test('should return false to a email with more than 64 characters on account', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email_with_more_than_sixty_four_characters_in_account_abc@gmail.com')).toBe(false)
  })

  test('should return true to a email with 64 characters on domain', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('valid_email_with_more_than_sixty_four_characters_in_account_abcd@gmail.com')).toBe(true)
  })

  test('should return false to a email with more than 63 characters on domain', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email@invalid-domain-with-more-than-sixty-three-characters-abcdefghjkl.com')).toBe(false)
  })

  test('should return true to a email with 63 characters on domain', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email@invalid-domain-with-more-than-sixty-three-characters-abcdefghjk.com')).toBe(true)
  })

  test('should return true to a email with 63 characters on each domain', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email'
    + '@invalid-domain-with-more-than-sixty-three-characters-abcdefghjk'
    + '.invalid-domain-with-more-than-sixty-three-characters-abcdefghjk')).toBe(true)
  })

  test('should return false to a email with more than 255 characters', async () => {
    const emailValidator = new EmailValidator()
    expect(emailValidator.validate('invalid_email_with_more_than_sixty_four_characters_in_account_abc'
    + 'invalid_email_with_more_than_sixty_four_characters_in_account_abc'
    + '@invalid-domain-with-more-than-sixty-three-characters-abcdefghjk'
    + '.invalid-domain-with-more-than-sixty-three-characters-abcdefgh')).toBe(false)
  })
})