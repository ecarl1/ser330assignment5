<<<<<<< HEAD
const PasswordManager = require('../src/examples/password-verification.js')

describe('Password Verification Tests', () => {
  // given, when, then / returns
  test('VerifyPassword_WhenCredentialsAreValid_ReturnTrue', () => {
    // Arrange
    const passwordManager = new PasswordManager() // Assuming PasswordManager is a class
=======
// const PasswordManager = require('../src/examples/password-verification2.js')
// Import
const PasswordManager = require('../src/examples/password-verification3.js')


describe('Password Verification Tests', () => {

  // Given, WHen, Then / Returns
  test('VerifyPassword_WhenCredentialsAreValid_ReturnsTrue', () => {
    // Arrange
    const passwordManager = new PasswordManager()
>>>>>>> 980cafdc2bf51dedd06777482c60206daea41629
    const userName = 'TestUser'
    const password = 'Password'

    // Act
    const result = passwordManager.verifyPassword(userName, password)

    // Assert
    expect(result).toBe(true)
  })
})
