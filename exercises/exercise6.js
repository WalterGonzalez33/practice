const leapYears = (year, limit) => {
  let currentYear = year
  const yearsLeap = []

  // loop for years limit
  for (let i = 0; i < limit; i++) {
    // Check if February 29 exists in this year
    const date = new Date(currentYear, 1, 29).getMonth()
    if (date === 1) {
      yearsLeap.push(currentYear)
    }

    currentYear++
  }

  return yearsLeap
}

console.log(leapYears(2024, 30))

module.exports = leapYears
