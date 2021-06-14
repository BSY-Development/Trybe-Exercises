const { decode, encode } = require('./encode-decode.js');

describe('Realizar testes do Jest para encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof decode).toBe('function');
    expect(typeof encode).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('trybe teste')).toBe('tryb2 t2st2');
    expect(decode('tryb2 t2st2')).toBe('trybe teste');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const stringPassada = 'Trybe Jest';
    expect(encode(stringPassada).length).toBe(stringPassada.length);
    expect(decode(stringPassada).length).toBe(stringPassada.length);
  });
});
