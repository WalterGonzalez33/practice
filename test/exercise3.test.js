/* eslint-disable no-undef */
const { differencesForDay } = require('../exercises/exercise3')

test('difference of days is correct', () => {
  expect(differencesForDay('May 1, 2023', 'Dec 24, 2023')).toEqual({ days: 237, message: 'the difference in days is 237' })
})

test('difference of days is correct', () => {
  expect(differencesForDay('Dec 1, 2023', 'Dec 24, 2023')).toEqual({ days: 23, message: 'the difference in days is 23' })
})
