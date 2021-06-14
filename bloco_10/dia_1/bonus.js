// Dados
const professionalBoard = [{
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  if (!id || !detail) {
    throw new Error('Insira um valor para id e detail')
  }
  if (!Object.keys(professionalBoard[0]).includes(detail)) {
    throw new Error('Chave passada não existe no objeto')
  }
  const person = professionalBoard.find((item) => item.id === id);
    if (!person) {
      throw new Error('Não existe funcinário com este ID')
    }
    return person[detail];
};

module.exports = {
  searchEmployee,
};