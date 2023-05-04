const data = require('../data/zoo_data');

const { employees, species } = data;

// Função para criar o objeto de acordo com o parametro
const localizeFromName = (nameParameter) => {

  const allName = employees.find((nome) => nome.firstName === nameParameter.name || nome.lastName === nameParameter.name || nome.id === nameParameter.id);
  return {
    id: allName.id,
    fullName: `${allName.firstName} ${allName.lastName}`,
    species: allName.responsibleFor.map((animalId) => species.find((specie) => specie.id === animalId).name),
    locations: allName.responsibleFor.map((animalId) => species.find((specie) => specie.id === animalId).location)

  }
}

//console.log(localizeFromName('Azevado'))

// Função para comparar o parametro da getEmployees com o da localizeFromName
function usePersonName(person) {
  const personName = employees.find((nome) => nome.firstName === person.name || nome.lastName === person.name || nome.id === person.id );
  return personName
}

function getEmployeesCoverage(person) {
  if (usePersonName(person)) return localizeFromName(person);
  } 

//console.log(getEmployeesCoverage({ name: 'Sharonda' }))

module.exports = getEmployeesCoverage;


/* {
	"id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
	"fullName": "Sharonda Spry",
	"species": [ "otters", "frogs" ],
	"locations": [ "SE", "SW" ]
} */