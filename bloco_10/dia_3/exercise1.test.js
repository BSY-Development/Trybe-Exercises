let { generateRandomNumber } = require('./exercise1');

test('Faz os testes do exercicio 1', () => {
  generateRandomNumber = jest.fn().mockReturnValue(10);

  generateRandomNumber();
  expect(generateRandomNumber).toBeCalled();
  expect(generateRandomNumber).toBeCalledTimes(1);
  expect(generateRandomNumber()).toBe(10);
  expect(generateRandomNumber).toBeCalledTimes(2);
});
