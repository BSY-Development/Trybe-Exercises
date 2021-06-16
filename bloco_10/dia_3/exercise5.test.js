const service = require('./exercise4');

test('Exercicio 5', () => {
  const first = jest.spyOn(service, 'toUpperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(first('BRUNO')).toBe('bruno'); // Funciona

  first.mockRestore();
  expect(service.toUpperCase('bruno')).toBe('BRUNO'); // Funciona
});
