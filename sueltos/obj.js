// const object = { a: true, b: 42, c: false }

// const getKeysOfBooleanValues = ( obj ) =>{
//     const keys = Object.keys(obj)
//     const arrNew = keys.filter((e)=>{
//         if(obj[e] === true || obj[e] === false){
//             return e
//         };
//     })
//     return arrNew
// }

// getKeysOfBooleanValues(object)

const obj = {
  deep: {
    kay: 21
  }
}

const searchInOcean = (ocean, section, item) => {
  const search = ocean[section]?.[item]
  if (typeof search !== 'undefined' && search != null) {
    return true
  } else {
    return false
  }
}

console.log(searchInOcean(obj, 'deep', 'kay'))

console.log(typeof obj.deep.kay)
