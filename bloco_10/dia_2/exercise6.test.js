const Animals = [{
    name: 'Dorminhoco',
    age: 1,
    type: 'Dog'
  },
  {
    name: 'Soneca',
    age: 2,
    type: 'Dog'
  },
  {
    name: 'Preguiça',
    age: 5,
    type: 'Cat'
  },
];

const findAnimalByName = (nome) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((item) => item.name === nome);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      };

      return reject('Nenhum animal com esse nome!');
    }, 200);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list)
};


describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({
          name: 'Dorminhoco',
          age: 1,
          type: 'Dog'
        });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});