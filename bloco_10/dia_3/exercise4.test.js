let { toUpperCase, firstLetter, concatString } = require('./exercise4');

describe('Fazer os testes do exercicio 4', () => {
  it('toUpperCase deve retornar lowerCase agora.', () => {
    toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(toUpperCase('BRUNO')).toBe('bruno');
    expect(toUpperCase).toBeCalled();
    expect(toUpperCase).toBeCalledWith('BRUNO');
  });

  it('firstLetter deve retornar a última letra.', () => {
    firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);

    expect(firstLetter('bruno')).toBe('o');
    expect(firstLetter).toBeCalled();
    expect(firstLetter).toBeCalledWith('bruno');
  });

  it('concatString deve retornar uma concatenação de 3 strings agora', () => {
    concatString = jest.fn().mockImplementation((strOne, strTwo, strThree) => strOne + strTwo + strThree);

    expect(concatString('bruno', 'trybe', 'teste')).toBe('brunotrybeteste');
    expect(concatString).toBeCalled();
    expect(concatString).toBeCalledWith('bruno', 'trybe', 'teste');
  });
});
