const data = require('../data/zoo_data');

const funcionarios = data.employees;

function getOldestFromFirstSpecies(id) {
  const firstAnimal = funcionarios.find((funcionario) => funcionario.id === id).responsibleFor
    .find((animal) => animal);
  const totalAnimal = data.species.filter((animal) => animal.id === firstAnimal)
    .map((bicho) => bicho.residents)[0];
  const resultado = totalAnimal.sort((a, b) => b.age - a.age)[0];
  const finalResult = [resultado.name, resultado.sex, resultado.age];
  return finalResult;
}

module.exports = getOldestFromFirstSpecies;

// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'))
/* Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por
essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie. */
