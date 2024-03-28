const Person = require('../src/person.js')

describe('Person', () => {
    const testDateOfBirth = '1990-01-01'
    const testSchool = { name: 'Test University', domain: 'test.edu' }
    let person

    beforeEach(() => {
        person = new Person('Doe', 'John', testSchool, testDateOfBirth, 'johndoe', 'student')
    })

    test('constructor should correctly assign properties', () => {
        expect(person.lastName).toBe('Doe')
        expect(person.firstName).toBe('John')
        expect(person.school).toEqual(testSchool)
        expect(person.dateOfBirth).toEqual(new Date(testDateOfBirth))
        expect(person.userName).toBe('johndoe')
        expect(person.affiliation).toBe('student')
    })

    test('email getter should return correct email address', () => {
        expect(person.email).toBe('johndoe@test.edu')
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
    });
    
    
    
})

