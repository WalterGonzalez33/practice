const cathFn = (err) => {
  console.log(err)
}

const requestXml = () => {
  const req = new XMLHttpRequest()

  req.open('GET', './data.txt')

  req.onload = () => {
    if (req.status === 200) {
      console.log(req.responseText)
    } else {
      console.log('was an error')
    }
  }

  req.onerror = () => {
    console.log('error')
  }

  req.send()
}
