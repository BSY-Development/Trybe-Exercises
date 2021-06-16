let { generateRandomNumber } = require('./exercise1');

test('Faz os testes do exercicio 1', () => {
  generateRandomNumber = jest.fn().mockReturnValue(10);

  generateRandomNumber();
  expect(generateRandomNumber).toBeCalledTimes(1);
  expect(generateRandomNumber()).toBe(10);
  expect(generateRandomNumber).toBeCalledTimes(2);
});

test('Faz os testes do exercicio 2', () => {
  generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(generateRandomNumber(10, 5)).toBe(2);
  expect(generateRandomNumber).toBeCalledTimes(1);
  expect(generateRandomNumber).toBeCalledWith(10, 5);
});

test('Faz os testes do exercicio 3', () => {
  /* Faz a primeira parte do exercicio, multiplicando 3 números */
  generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
  expect(generateRandomNumber(10, 5, 2)).toBe(100);
  expect(generateRandomNumber).toBeCalledTimes(1);
  expect(generateRandomNumber).toBeCalledWith(10, 5, 2);

  /* Reseta o mock */
  generateRandomNumber.mockReset();
  expect(generateRandomNumber).toBeCalledTimes(0);

  /* Faz a segunda parte do exercicio, retornando o dobro do número passado */
  generateRandomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(generateRandomNumber(10)).toBe(20);
  expect(generateRandomNumber).toBeCalledTimes(1);
  expect(generateRandomNumber).toBeCalledWith(10);
});
