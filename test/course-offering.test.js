const CourseOffering = require('../src/Course-offering');
const Student = require('../src/student');
const Person = require('../src/person.js');

describe('Person', () => {
  const person = new Person('Doe', 'John', { name: 'Test University', domain: 'test.edu' }, '1990-01-01', 'johndoe', 'staff');

  it('should correctly assign constructor properties', () => {
    expect(person.lastName).toBe('Doe'); 
    expect(person.firstName).toBe('John');
    // Continue for other properties...
  });

  it('should return the correct email address', () => {
    expect(person.email).toBe('johndoe@test.edu');
  });

});

const Student = require('../path/to/student.js');

describe('Student', () => {
  const student = new Student('Doe', 'Jane', { name: 'Test University', domain: 'test.edu' }, '1992-02-02', 'janedoe');

  it('should list courses correctly', () => {
    // Add courses to student.courseList and student.transcript then test order
  });

  it('should calculate total credits correctly', () => {
    // Add courses to student.courseList with credits and verify the total
    expect(student.credits).toBe(/* expected total credits */);
  });

  it('should calculate GPA correctly', () => {
    // Add courses with grades to both courseList and transcript, then check GPA
    expect(student.gpa).toBeCloseTo(/* expected GPA */);
  });

  it('should return the correct string representation', () => {
    const expectedString = `...`; // What you expect based on the properties and values
    expect(student.toString()).toBe(expectedString);
  });
});


describe('CourseOffering', () => {
  let course;
  let student1, student2, nonStudent;

  beforeEach(() => {
    course = new CourseOffering({ name: 'Math 101', department: 'Math', number: 101 }, 1, 2022, 'Fall');
    student1 = new Student('john.doe', 'John', 'Doe');
    student2 = new Student('jane.doe', 'Jane', 'Doe');
    nonStudent = { name: 'Not A Student' };
  });

  it('registers students and updates their course lists', () => {
    course.register_students([student1, student2]);
    expect(course.get_students()).toContain(student1);
    expect(course.get_students()).toContain(student2);
    expect(student1.courseList).toContain(course);
    expect(student2.courseList).toContain(course);
  });


  it('submits and retrieves a grade for a student', () => {
    course.register_students([student1]);
    course.submit_grade(student1, 'A');
    expect(course.get_grade(student1)).toBe('A');
  });

  it('handles invalid grade submission', () => {
    course.register_students([student1]);
    const response = course.submit_grade(student1, 'Invalid Grade');
    expect(response).toBe('Please enter a valid grade');
    expect(course.get_grade(student1)).toBeUndefined();
  });

  it('returns undefined when retrieving a grade for an unregistered student', () => {
    expect(course.get_grade(student1)).toBeUndefined();
  });

  it('returns a formatted string with instructor information', () => {
    const instructor = { firstName: 'Alice', lastName: 'Smith' };
    course.instructor = instructor;
    expect(course.toString()).toBe(`Math 101, Math 101-1, ${instructor.firstName} ${instructor.lastName} (Fall 2022)`);
  });

  it('returns a formatted string without instructor information', () => {
    expect(course.toString()).toBe('Math 101, Math 101-1 (Fall 2022)');
  });
});


