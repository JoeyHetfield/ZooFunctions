const data = require('../data/zoo_data');

const especies = data.species;

function getSpeciesByIds(...ids) {
  return especies.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
