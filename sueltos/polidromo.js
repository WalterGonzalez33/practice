const isPal = (word) => {
  const wordNew = []
  const wordInverse = []
  let cont = 0
  let wordVerify = true

  for (let i = 0; i < word.length; i++) {
    wordNew[i] = word[i]
  }
  for (let i = wordNew.length - 1; i >= 0; i--) {
    wordInverse[cont] = wordNew[i]
    cont++
  }
  for (let i = 0; i < word.length; i++) {
    if (wordInverse[i] !== wordNew[i]) { wordVerify = false }
  }
  return wordVerify
}

console.log(isPal('ana'))
console.log(isPal('otto'))
console.log(isPal('eduardo'))
