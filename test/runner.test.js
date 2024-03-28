const Person = require('../src/person')

describe('Person', () => {
  let person

  beforeEach(() => {
    const testSchool = { name: 'Test University', domain: 'test.edu' }
    person = new Person('Doe', 'John', testSchool, '1990-01-01', 'johndoe', 'student')
  })

  test('toString should return a formatted string with correct components', () => {
    const dobInUTC = new Date(Date.UTC(person.dateOfBirth.getFullYear(), person.dateOfBirth.getMonth(), person.dateOfBirth.getDate()))
    const expectedDOB = dobInUTC.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })

    const output = person.toString()
    expect(output).toContain(`Student Name: ${person.firstName} ${person.lastName}`)
    expect(output).toContain(`School: ${person.school.name}`)
    expect(output).toContain(`DOB: ${expectedDOB}`)
    expect(output).toContain(`Username: ${person.userName}`)
    expect(output).toContain(`affiliation: ${person.affiliation}`)
  })
})
