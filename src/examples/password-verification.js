class PasswordManager {
<<<<<<< HEAD
  verifyPassword (userName, password) {
    return true
=======

  verifyPassword (input, rules) {
    const errors = []
    rules.forEach(rule => {
      const result = rule(input)

      if (!result.passed) {
        errors.push(`error ${result.reason}`)
      }
    })
    return errors
>>>>>>> 980cafdc2bf51dedd06777482c60206daea41629
  }
}

module.exports = PasswordManager
