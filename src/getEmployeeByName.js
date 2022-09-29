const data = require('../data/zoo_data');

const funcionarios = data.employees;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return funcionarios.find((funcionario) => funcionario.firstName === employeeName
  || funcionario.lastName === employeeName);
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Bethea'));
