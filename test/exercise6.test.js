const leapYears = require('../exercises/exercise6')

const response1 = [
  2024, 2028, 2032, 2036,
  2040, 2044, 2048, 2052,
  2056, 2060, 2064, 2068,
  2072, 2076, 2080
]

const response2 = [
  2024, 2028, 2032,
  2036, 2040, 2044,
  2048, 2052
]
describe('suit test for leap years!', () => {
  it('should return all leap years', () => {
    expect(leapYears(2024, 60)).toEqual(response1)
  })
  //
  it('should return all leap years', () => {
    expect(leapYears(2024, 30)).toEqual(response2)
  })
})
