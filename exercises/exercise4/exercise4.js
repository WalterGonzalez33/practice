const startButton = document.getElementById('started-button')

const hangedGame = (word = 'hello', tried) => {
  const wordInArray = word.split('')
  const wordUse = []
  let result = null
  for (let i = 0; i < wordInArray.length; i++) {
    wordUse.push('_')
  }
  let n = tried
  while (n <= tried) {
    if (wordUse.join() === wordInArray.join()) { result = true; break }
    if (n === 0) { result = false; break }

    const char = prompt(`guess the word ${wordUse}  tried--> ${n}`)

    if (wordInArray.includes(char) === false) { n-- }

    wordInArray.forEach((e, index) => {
      if (char === e) {
        wordUse[index] = char
      }
    })
  }

  return result
}

startButton.addEventListener('click', () => {
  const yourWord = prompt('what is your word')
  const resultOfGame = typeof yourWord === 'string' ? hangedGame(yourWord, 5) : false

  if (resultOfGame) {
    alert('you winner')
  } else {
    (
      alert('you lose')
    )
  }
})
