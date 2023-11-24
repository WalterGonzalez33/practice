const getPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('this promise was resolved')
    }, 2000)
  })
}

const handlerPromiseResolve = (result) => {
  getPromise()
}
console.log(handlerPromiseResolve)
