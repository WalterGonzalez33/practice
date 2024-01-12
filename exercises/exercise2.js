const simplifyPath = (path) => {
  const stack = []
  const arrayPath = path.split('/')

  arrayPath.forEach(element => {
    if (element === '..') {
      stack.pop()
    }
    if (element !== '' && element !== '..' && element !== '.') {
      stack.push(element)
    }
  })

  return (`/${stack.join('/')}`)
}

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/home//stack/study'))
console.log(simplifyPath('/x/./y/../../z/'))
console.log(simplifyPath('/x/./y/../z/'))
console.log(simplifyPath('/x/./y/../z/'))

module.exports = { simplifyPath }
