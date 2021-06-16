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
