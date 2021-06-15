const transform = (text) => {
  upperText = text.toUpperCase();
  return upperText;
}

test('Testa se a função toUpperCase retorna o texto maiúsculo apos 1,5 segundos', (done) => {
  setTimeout(() => {
    expect(transform('bruno')).toBe('BRUNO');
    done();
  }, 1500);
});