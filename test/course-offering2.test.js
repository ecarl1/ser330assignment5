const CourseOffering = require('../src/course-offering')
const Course = require('../src/course') // Assume this is available for creating course instances

describe('CourseOffering', () => {
  let course
  let courseOffering
  let student

  beforeEach(() => {
    course = new Course('CS', '101', 'Intro to Computer Science', 4)
    courseOffering = new CourseOffering(course, '01', '2024', 'Fall')
    student = {
      userName: 'johndoe',
      course_list: [],
      transcript: {},
      // Ensure the mock transcript can be updated similar to the actual Student class
      updateTranscript (courseKey, grade) {
        this.transcript[courseKey] = grade
      }
    }
  })

  describe('Constructor', () => {
    it('initializes with the correct values', () => {
      expect(courseOffering.course).toBe(course)
      expect(courseOffering.sectionNumber).toBe('01')
      expect(courseOffering.year).toBe('2024')
      expect(courseOffering.quarter).toBe('Fall')
      expect(courseOffering.registered_students).toEqual([])
      expect(courseOffering.grades).toEqual({})
    })
  })

  describe('register_students method', () => {
    it('adds students to the course offering', () => {
      courseOffering.register_students([student])
      expect(courseOffering.registered_students).toContain(student)
      expect(student.course_list).toContain(courseOffering)
    })
  })

  describe('get_students method', () => {
    it('returns the registered students', () => {
      courseOffering.register_students([student])
      expect(courseOffering.get_students()).toContain(student)
    })
  })

  describe('toString method', () => {
    it('returns the correct string representation without an instructor', () => {
      expect(courseOffering.toString()).toBe('Intro to Computer Science, CS 101-01 (Fall 2024)')
    })

    it('returns the correct string representation with an instructor', () => {
      // Mocking the instructor object for this test
      const instructor = {
        firstName: 'Jane',
        lastName: 'Smith',
        toString() {
          return `${this.firstName} ${this.lastName}`
        }
      }
      courseOffering.instructor = instructor
      expect(courseOffering.toString()).toBe('Intro to Computer Science, CS 101-01, Jane Smith (Fall 2024)')
    })
  })
})
