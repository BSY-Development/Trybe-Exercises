const { searchEmployee } = require('./bonus.js');

describe('Testa a função searchEmployee', () => {
  it('Check if is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('check if returns Ana for firstname of 8579-6', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('check if returns Jobs for lastname of 5569-4', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });
  it('check if returns correct specialities for id 4456-4', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  it('check if throw error when ID dont exist', () => {
    expect(() => { searchEmployee('8579-0', 'firstName') }).toThrowError(new Error('Não existe funcinário com este ID'));
  });
  it('check if throw error when id or detail is undefined', () => {
    expect(() => { searchEmployee('4456-4') }).toThrowError(new Error('Insira um valor para id e detail'));
  });
  it('check if throw error when detail is wrong', () => {
    expect(() => { searchEmployee('4456-4', 'age') }).toThrowError(new Error('Chave passada não existe no objeto'));
  });
});
