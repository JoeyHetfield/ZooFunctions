const data = require('../data/zoo_data');

const { species, hours } = data;

const horarios = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Tuesday'))
      .map((nome) => nome.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Wednesday'))
      .map((nome) => nome.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Thursday'))
      .map((nome) => nome.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Friday'))
      .map((nome) => nome.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Saturday'))
      .map((nome) => nome.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Sunday'))
      .map((nome) => nome.name),
  },

};

// tentar criar constante para fazer requisito dos dias, igual a parte de cima porém valor dinamico com o param dia
const validHour = (dia) => {
  const semana = {
    [dia]: {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(dia))
        .map((nome) => nome.name),
    },
  };
  return semana;
};

const { Monday } = horarios;

function getSchedule(scheduleTarget) {
  const validAnimal = species.find((animal) => animal.name === scheduleTarget);

  if (!scheduleTarget) { // se não tiver parametro retorna lista de tudo
    return horarios;
  } if (scheduleTarget === 'Monday') { // se for segunda ta fechado
    return { Monday };
  } if (validAnimal) { // param passado animal retorna os dias que ta disponivel
    return validAnimal.availability;
  } if (Object.keys(hours).includes(scheduleTarget)) { // param passado é o dia
    return validHour(scheduleTarget);
  } return horarios;
}
module.exports = getSchedule;
// console.log(getSchedule('Friday'));

// .includes(scheduleTarget)
/*   }if (Object.keys(horarios).includes(scheduleTarget)){
    return horarios.find((hora) => hora[0] === scheduleTarget).map((nome) => `${nome}, ${nome.exhibition}, ${nome.officeHour} `) */
