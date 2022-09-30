const data = require('../data/zoo_data');

const price = data.prices;

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
}

// console.log(countEntrants(entrants))

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  } const precoCrianca = countEntrants(entrants).child * price.child;
  const precoAdulto = countEntrants(entrants).adult * price.adult;
  const precoIdoso = countEntrants(entrants).senior * price.senior;
  const total = precoCrianca + precoAdulto + precoIdoso;
  return total;
}
// console.log(calculateEntry(entrants))

module.exports = { calculateEntry, countEntrants };
