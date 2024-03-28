const Course = require('../src/course')

describe('Course', () => {
  describe('Constructor', () => {
    it('should correctly assign properties', () => {
      const course = new Course('CS', '101', 'Intro to Computer Science', 4)
      expect(course.department).toBe('CS')
      expect(course.number).toBe('101')
      expect(course.name).toBe('Intro to Computer Science');
      expect(course.credits).toBe(4)
    })
  })

  describe('toString method', () => {
    it('should return the correct string format for typical input', () => {
      const course = new Course('CS', '101', 'Intro to Computer Science', 4)
      expect(course.toString()).toBe('Intro to Computer Science, CS 101 (4 credits)')
    })

    // Additional test case for different input to ensure coverage
    it('should return the correct string format for different input', () => {
      const course = new Course('MATH', '202', 'Differential Equations', 3)
      expect(course.toString()).toBe('Differential Equations, MATH 202 (3 credits)')
    })
  })
})
