/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.

Y añade una capacidad de buscar la información de varios superhéroes a la vez.

Ejemplo:
mostrarInformacionSuperheroe('Iron Man');

Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores

Ejemplo 2:
mostrarInformacionSuperheroes([array de nombres]]);

Salida:
Muestra la información de todos los superheroes

*/

// Crear array de objetos de superheroes marvel
const infoSuperHeroes = {
  'Iron Man': {
    realName: 'Tony Stark',
    poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
    equipo: 'Los vengadores'
  },
  'Capitán América': {
    realName: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
    equipo: 'Los vengadores'
  },
  Thor: {
    realName: 'Thor Odinson',
    poderes: ['Mjolnir', 'Viento y trueno'],
    equipo: 'Los vengadores'
  },
  'Spider-Man': {
    realName: 'Peter Parker',
    poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
    equipo: 'Los vengadores'
  },
  Hulk: {
    realName: 'Bruce Banner',
    poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
    equipo: 'Los vengadores'
  }
}

const getInfoAboutSuperHeroes = (heroe) => {
  return infoSuperHeroes[heroe]
}
const getInfoAboutSuperHeroesArray = (heroes) => {
  const listHeroes = heroes.map((heroe) => infoSuperHeroes[heroe])
  return listHeroes
}
getInfoAboutSuperHeroes('Iron Man')
getInfoAboutSuperHeroesArray(['Iron Man', 'Thor', 'Spider-Man', 'Hulk'])

module.exports = { getInfoAboutSuperHeroes, getInfoAboutSuperHeroesArray }
