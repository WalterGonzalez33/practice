const permutation = (arrayInt) => {
  // check if the elements of array are number
  arrayInt.forEach(element => {
    if (typeof element !== 'number') {
      throw new Error('the element of the array have to be numbers')
    }
  })

  let numberMaxPermutation = 0
  const endNumber = arrayInt.pop()

  // loop for
  for (let i = 0; i < arrayInt.length; i++) {
    if (i === 0) { continue }

    if (arrayInt[i] === arrayInt[(i - 1)] + 1) {
      arrayInt[i] === endNumber
        ? numberMaxPermutation = arrayInt[i]
        : numberMaxPermutation = arrayInt[i] + 1
    } else { break }
  }

  return numberMaxPermutation
}

module.exports = permutation
