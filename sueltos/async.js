// const car1 = []
const car = [{
  type: 'Fiat',
  model: '500',
  color: 'white'
},
{
  type: 'Peugeot',
  model: '208',
  color: 'blue'
},
{
  type: 'Fiat',
  model: 'duna',
  color: 'white'
},
{
  type: 'nissan',
  model: 'Sen',
  color: 'white'
}]

const getCarsForColor = (data, color) => {
  return new Promise((resolve, reject) => {
    if (data.length === 0) { reject(new Error('data is empty =)')) }

    const ColorCar = data.filter(car => car.color === color)
    resolve(ColorCar)
  })
}

const getModelCar = (cars) => {
  const carsList = cars.map(car => car.model)
  return carsList
}

// getCarsForColor(car,'white')
//     .then(response => getModelCar(response))
//     .then(data => console.log(data))
//     .finally(f => console.log('work end'))
//     .catch(err => console.log(err))

const getCarsWithAsync = async (car, color) => {
  try {
    const carsColor = await getCarsForColor(car, color)
    const modelCarsForColor = getModelCar(carsColor)
    return modelCarsForColor
  } catch (err) {
    return err
  }
}

async function asyncGetData () {
  const data = await getCarsWithAsync(car, 'white')
  console.log(data)
}

asyncGetData()
