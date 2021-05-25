const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

const createObj = (nome) => {
  let personEmail = nome.toLowerCase().split(' ').join('_');
  const items = {
    nomeCompleto: nome,
    email: `${personEmail}@trybe.com`,
  };
  return items;
}

newEmployees(createObj);
