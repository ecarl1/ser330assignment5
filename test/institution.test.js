const Institution = require('../src/institution')
const Student = require('../src/student')
const Instructor = require('../src/instructor')
const Course = require('../src/course')
const CourseOffering = require('../src/course-offering')

describe('Institution', () => {
  let institution
  let student
  let instructor
  let course
  let courseOffering

  beforeEach(() => {
    institution = new Institution('Test University', 'test.edu')
    student = new Student('John', 'Doe', 'johndoe', 'test.edu')
    instructor = new Instructor('Jane', 'Doe', 'janedoe', 'test.edu')
    course = new Course('Intro to Testing', 'TEST', 101)
    courseOffering = new CourseOffering(course, 1, 2024, 'Fall', instructor)
  })

  test('enroll_student should add a student', () => {
    institution.enroll_student(student)
    expect(institution.studentList[student.userName]).toEqual(student)
  })

  // More tests for enroll_student...

  test('hire_instructor should add an instructor', () => {
    institution.hire_instructor(instructor)
    expect(institution.facultyList[instructor.userName]).toEqual(instructor)
  })

  // More tests for hire_instructor...

  // Continue adding tests for each method...

  test('add_course should add a course to the catalog', () => {
    institution.add_course(course)
    expect(institution.courseCatalog[course.name]).toEqual(course)
  })

  test('add_course_offering should add a course offering', () => {
    institution.add_course(course); // Ensure the course is added first
    institution.add_course_offering(courseOffering);
    expect(institution.courseSchedule[course.name]).toContain(courseOffering)
  })
})
