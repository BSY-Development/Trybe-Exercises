const { users, getUserName } = require('./exercise2e3');

describe('Faz os testes solicitados na questão 2', () => {
  it('Caso ID seja encontrado', () => {
    expect.assertions(1);
    return getUserName(4)
    .then((data) => {
      expect(data).toBeTruthy();
    });
  });
  it('Caso ID Não seja encontrado', () => {
    expect.assertions(1);
    getUserName(6)
    .catch((error) => {
      expect(error).toEqual({"error": "User with 6 not found."});
    });
  });
});

describe('Faz os testes solicitados na questão 2 porem com async', () => {
  it('Caso ID seja encontrado', async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toBeTruthy();
  });
  it('Caso ID Não seja encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    }
    catch(error) {
      expect(error).toEqual({"error": "User with 6 not found."});
    }
  });
});
