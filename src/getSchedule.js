const data = require('../data/zoo_data');

const {species, hours} = data

const horarios = {
  Monday:{
    officeHour: "CLOSED",
    exhibition: "The zoo will be closed!",
  },
  Tuesday: { 
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`, 
    exhibition: species.filter((specie) => specie.availability.includes('Tuesday')).map((nome) => nome.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Wednesday')).map((nome) => nome.name),
  },
  Thursday:{
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Thursday')).map((nome) => nome.name),
  },
  Friday:{
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Friday')).map((nome) => nome.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Saturday')).map((nome) => nome.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Sunday')).map((nome) => nome.name),
  }
  
}

function getSchedule(scheduleTarget) {
  if(!scheduleTarget){
    return horarios
  }
}

module.exports = getSchedule;
console.log(getSchedule())
