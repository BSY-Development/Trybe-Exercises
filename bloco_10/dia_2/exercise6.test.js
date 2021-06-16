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

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((item) => item.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject('Nenhum animal com essa idade!');
    }, 200);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list)
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(animal => animal);
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

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      const animalEncontrado = [{ name: 'Soneca', age: 2, type: 'Dog' }];
      return expect(getAnimalByAge(2)).resolves.toEqual(animalEncontrado);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna o erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(10)).rejects.toBe('Nenhum animal com essa idade!');
    });
  });
});
