const permutation = require('../exercises/exercise7')

const should = {
  expect1: {
    param: [1, 2, 3, 4, 5],
    expect: 5
  },
  expect2: {
    param: [1, 2, 3, 5],
    expect: 4
  }
}

describe('suit test of permutation exercise', () => {
  it('should be return expected test 1', () => {
    expect(permutation(should.expect1.param)).toBe(should.expect1.expect)
  })

  it('should be return expected test 2', () => {
    expect(permutation(should.expect2.param)).toBe(should.expect2.expect)
  })
})
