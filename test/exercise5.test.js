const sortForLastName = require('../exercises/exercise5')

const persons = [
  'Victor Robles',
  'Antonio Alcantara',
  'Al Pacino',
  'Robert DeNiro',
  'Brad Pitt',
  'Sylvester Stallone'
]
const orderedExpect = [
  'Antonio Alcantara',
  'Robert DeNiro',
  'Al Pacino',
  'Brad Pitt',
  'Victor Robles',
  'Sylvester Stallone'
]

describe('tests for ordered names', () => {
  test('should ordered correctly', () => {
    expect(sortForLastName(persons)).toEqual(orderedExpect)
  })
  it('description', () => {
    expect(sortForLastName(['marcelo b', 'juan a', 'carlo z', 'juana c'])).toEqual(['juan a', 'marcelo b', 'juana c', 'carlo z'])
  })
})
