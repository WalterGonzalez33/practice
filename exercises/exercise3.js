const differencesForDay = (date1, date2) => {
  // verifying what the object is not instantiate
  date1 = date1 instanceof Date ? date1 : new Date(date1)
  date2 = date2 instanceof Date ? date1 : new Date(date2)

  // calculate in milliseconds the difference of day
  const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime())

  // milliseconds in days
  const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))

  const message = `the difference in days is ${days}`

  return { days, message }
}

console.log(differencesForDay('Dec 1, 2023', 'Dec 24, 2023'))
console.log(differencesForDay('May 1, 2023', 'Dec 24, 2023'))

module.exports = { differencesForDay }
