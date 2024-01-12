/* eslint-disable no-undef */
const { getInfoAboutSuperHeroes, getInfoAboutSuperHeroesArray } = require('../exercises/exercise1')
const objectExpected1 = [
  {
    realName: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
    equipo: 'Los vengadores'
  },
  {
    realName: 'Thor Odinson',
    poderes: ['Mjolnir', 'Viento y trueno'],
    equipo: 'Los vengadores'
  }]
const objectExpected2 = [
  {
    realName: 'Tony Stark',
    poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
    equipo: 'Los vengadores'
  },
  {
    realName: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
    equipo: 'Los vengadores'
  }
]

const typeofResponseExpected = (list) => {
  const response = getInfoAboutSuperHeroesArray(list)
  return typeof response
}

test('function is defined', () => {
  expect(getInfoAboutSuperHeroes('Iron Man')).toBeDefined()
})

test('if the expected is an object', () => {
  expect(typeofResponseExpected(['Iron Man'])).toBe('object')
  expect(typeofResponseExpected(['Hulk'])).toBe('object')
})

test('if get the expected information', () => {
  expect(getInfoAboutSuperHeroes('Hulk')).toEqual({
    realName: 'Bruce Banner',
    poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
    equipo: 'Los vengadores'
  })
  expect(getInfoAboutSuperHeroesArray(['Capitán América', 'Thor'])).toEqual(objectExpected1)
  expect(getInfoAboutSuperHeroesArray(['Iron Man', 'Capitán América'])).toEqual(objectExpected2)
})
