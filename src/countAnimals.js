const data = require('../data/zoo_data');

const animals = data.species;
// Contagem total de todos animais

const totalAnimals = () => animals.reduce((acc, index) => {
  acc[index.name] = index.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (animal === undefined) {
    return totalAnimals();
  } return 'testando';
}

console.log(countAnimals());

module.exports = countAnimals;

/* A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.

Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

  {
    lions: 4,
    // [...]
  }
Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

 */
