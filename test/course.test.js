const Course = require('../src/course')

describe('Course', () => {
  describe('toString method', () => {
    it('should return the correct string format', () => {
      const course = new Course('MPCS', '55001', 'Algorithms', 3)
      expect(course.toString()).toBe('Algorithms, MPCS 55001 (3 credits)')
    })
  })
})
