const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retornar número de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Retornar o nome dos elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Retornar média da idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Retornar se parametro for nulo: ', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });

  it('Retornar o erro se parametro não for string', () => {
    expect(handlerElephants(98047)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retornar nulo se for um parametro que não é correto', () => {
    expect(handlerElephants('JoeyHetfield')).toBe(null);
  });
});
