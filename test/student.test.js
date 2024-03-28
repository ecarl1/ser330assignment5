const Student = require('../src/student')

describe('Student', () => {
    let student

    beforeEach(() => {
        const testSchool = { name: 'Test University', domain: 'test.edu' };
        student = new Student('Doe', 'John', testSchool, '1990-01-01', 'johndoe');
    });

    test('constructor should initialize properties correctly', () => {
        // Assertions to check if student properties are initialized correctly
    });

    test('list_courses should return courses in correct order', () => {
        // Setup courses, add them to the student, and test the order
    });

    test('credits should calculate total credits correctly', () => {
        // Add courses with credits to the student and check the total
    });

    test('gpa should calculate GPA correctly', () => {
        // Add courses with grades and credits, then check GPA calculation
    });

    test('toString should return a formatted string with correct components', () => {
        // Similar to Person, but with additional checks for GPA and credits
    });
});
