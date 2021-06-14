const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Compare dois objetos para verificar se são idênticos ou não
// implemente seus testes aqui
describe('Testa se os objetos são iguais ou não', () => {
  it('obj 1 vs obj 2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('obj 1 vs obj 3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('obj 2 vs obj 3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
