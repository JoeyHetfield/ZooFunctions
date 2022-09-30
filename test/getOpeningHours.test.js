const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retornar objeto se não tiver parametro', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Retornar que o zoo está fechado já que sempre está de segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Retornar que o zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Retornar que o zoo está fechado dependendo do horário', () => {
    expect(getOpeningHours('Tuesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Retornar erro se não tiver AM/PM certo', () => {
    const error = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Wednesday', '09:00-ZM')).toThrowError(error);
  });
  it('Retornar erro se não for passado número no horário', () => {
    const error = new Error('The hour should represent a number');
    expect(() => getOpeningHours('Friday', '0H:00-AM')).toThrowError(error);
  });
  it('Retornar erro se a hora não for entre 0 e 12', () => {
    const error = new Error('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Thursday', '13:00-PM')).toThrowError(error);
  });
  it('Retornar erro se os minutos não forem entre 0 e 59', () => {
    const error = new Error('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Tuesday', '09:65-AM')).toThrowError(error);
  });
  it('Dia tem que ser válido', () => {
    const error = new Error('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Joey', '09:00')).toThrowError(error);
  });
});
