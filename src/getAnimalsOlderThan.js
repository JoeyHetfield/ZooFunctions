const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especies = data.species.find((specie) => specie.name === animal).residents;
  return especies.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
