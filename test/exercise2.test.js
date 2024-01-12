/* eslint-disable no-undef */
const { simplifyPath } = require('../exercises/exercise2')

test('is the expected path', () => {
  expect(simplifyPath('/x/./y/../../z/')).toBe('/z')
  expect(simplifyPath('/home//user/log/../')).toBe('/home/user')
  expect(simplifyPath('/../')).toBe('/')
})
