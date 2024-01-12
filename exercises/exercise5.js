const persons = [
  'Victor Robles',
  'Antonio Alcantara',
  'Al Pacino',
  'Robert DeNiro',
  'Brad Pitt',
  'Sylvester Stallone'
]
const sortForLastName = (persons) => {
  // split only the last name and arranged alphabetically
  const lastName = persons.map(names => names.split(' ')[1]).sort()

  // complete the people with the name
  const fullName = lastName.map((lastName) => {
    //
    const originalName = persons.find((name) => {
      if (name.split(' ')[1] === lastName) { return name }
      return null
    })
    //
    return originalName
  })

  return fullName
}

sortForLastName(persons)

module.exports = sortForLastName
